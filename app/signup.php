<?php
  include "environment.php";

  function get_affiliate_data() {
    return $_POST["affiliate"];
  }

  function get_users_data() {
    return $_POST["user"];
  }

  function get_answers_data() {
    return (array)json_decode($_POST["answers"]);
  }

  function send_api_request($target, $method, $data) {
    $api_domain = API_DOMAIN;
    $api_key = API_KEY;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "{$api_domain}/Apiv3/json");
    curl_setopt($ch, CURLOPT_POSTFIELDS, "NetworkToken={$api_key}&Target={$target}&Method={$method}&{$data}");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // Decode the response into a PHP associative array
    $response = json_decode($response, true)["response"];

    // Make sure that there wasn't a problem decoding the response
    if(json_last_error()!==JSON_ERROR_NONE){
    	throw new RuntimeException(
    		'API response not well-formed (json error code: '.json_last_error().')'
    	);
    }

    if (isset($response['status']) && $response['status'] === 1) {
    	return $response['data'];
    } else {
//     	echo 'API call failed'.(isset($response['errorMessage'])?' ('.$response['errorMessage'].')':'').'';
//     	echo PHP_EOL;
//     	echo 'Errors: <pre>'.print_r($response['errors'], true).'';
//     	echo PHP_EOL;

    	echo json_encode($response);
    	return null;
    }
  }

  function create_sign_up_question_answer($affiliate_id) {
    $response = send_api_request("Affiliate", "getSignupQuestions", "status=active");
    $answers_data = get_answers_data();
    $results = array();
    if(isset($response) && isset($answers_data) && isset($affiliate_id)){
      foreach ($answers_data as $item) {
        $answer = json_decode(json_encode($item), true);
        $answer_id = $answer["id"];
        $answer_value = $answer["value"];
        if (array_key_exists($answer_id, $response)) {
          $data = "id={$affiliate_id}&data[question_id]={$answer_id}&data[answer]={$answer_value}";
          $result = send_api_request("Affiliate", "createSignupQuestionAnswer", $data);
          if(isset($result)) {
            array_push($results, $result);
          }
        }
      }
    }
    return $results;
  }

  function start_signing_up() {
      $affiliate_data = get_affiliate_data();
      $users_data = get_users_data();
      $sign_up_data = "{$affiliate_data}&${users_data}&return_object=1";
      $affiliate_response = send_api_request("Affiliate", "signup", $sign_up_data);

      if(isset($affiliate_response)){
        $affiliate_id = $affiliate_response["Affiliate"]["id"];
        $question_response = create_sign_up_question_answer($affiliate_id);
        echo json_encode(array($affiliate_response, $question_response));
      }
    }

    start_signing_up();
?>
