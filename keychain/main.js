// Send Handshake event
$("#sw-handshake").click(function() {
    steem_keychain.requestHandshake(function() {
        console.log('Handshake received!');
    });
});

// All transactions are sent via a swRequest event.

// Send decryption request
$("#send_decode").click(function() {
    steem_keychain.requestVerifyKey($("#decode_user").val(), $("#decode_message").val(), $("#decode_method option:selected").text(), function(response) {
        console.log('main js response - verify key');
        console.log(response);
    });
});

// Send post request
$("#send_post").click(function() {
    steem_keychain.requestPost($("#post_username").val(), $("#post_title").val(), $("#post_body").val(), $("#post_pp").val(), $("#post_pu").val(), $("#post_json").val(), $("#post_perm").val(), $("#comment_options").val(), function(response) {
        console.log('main js response - post');
        console.log(response);
    });
});

// Send vote request
$("#send_vote").click(function() {
    steem_keychain.requestVote($("#vote_username").val(), $("#vote_perm").val(), $("#vote_author").val(), $("#vote_weight").val(), function(response) {
        console.log('main js response - vote');
        console.log(response);
    });
});

// Send Custom JSON request
$("#send_custom").click(function() {
    steem_keychain.requestCustomJson($("#custom_username").val(), $("#custom_id").val(), $("#custom_method option:selected").text(), $("#custom_json").val(), $('#custom_message').val(), function(response) {
        console.log('main js response - custom JSON');
        console.log(response);
    });
});

// Send transfer request
$("#send_tra").click(function() {
  console.log("transfer");
    steem_keychain.requestTransfer($("#transfer_username").val(), $("#transfer_to").val(), $("#transfer_val").val(), $("#transfer_memo").val(), $("#transfer_currency option:selected").text(), function(response) {
        console.log('main js response - transfer');
        console.log(response);
    }, $("#transfer_enforce").is(":checked"));
});

// Send tokens request
$("#sendTokens").click(function() {
    steem_keychain.requestSendToken($("#tokens_username").val(), $("#tokens_to").val(), $("#tokens_qt").val(), $("#tokens_memo").val(), $("#tokens_unit").val(), function(response) {
        console.log('main js response - tokens');
        console.log(response);
    });
});

// Send delegation
$("#send_delegation").click(function() {
    steem_keychain.requestDelegation($("#delegation_username").val(), $("#delegation_delegatee").val(), $("#delegation_sp").val(), $("#delegation_unit option:selected").text(), function(response) {
        console.log('main js response - delegation');
        console.log(response);
    });
});

$("#send_signature").click(function() {
    steem_keychain.requestSignBuffer($("#sign_username").val(), $("#sign_message").val(), $("#sign_method option:selected").text(), function(response) {
        console.log('main js response - sign');
        console.log(response);
    });
});

$("#send_addauth").click(function() {
    steem_keychain.requestAddAccountAuthority($("#addauth_username").val(), $("#addauth_authorized_username").val(), $("#addauth_role option:selected").text(), $("#addauth_weight").val(), function(response) {
        console.log('main js response - add auth');
        console.log(response);
    });
});

$("#send_removeauth").click(function() {
    steem_keychain.requestRemoveAccountAuthority($("#removeauth_username").val(), $("#removeauth_authorized_username").val(), $("#removeauth_role option:selected").text(), function(response) {
        console.log('main js response - remove auth');
        console.log(response);
    });
});

$("#send_broadcast").click(function() {
    steem_keychain.requestBroadcast($("#broadcast_username").val(), $("#broadcast_operations").val(), $("#broadcast_method option:selected").text(), function(response) {
        console.log('main js response - broadcast');
        console.log(response);
    });
});

$("#send_signed_call").click(function() {
    steem_keychain.requestSignedCall($("#signed_call_username").val(), $("#signed_call_method").val(), JSON.parse($("#signed_call_params").val()), $("#signed_call_key_type option:selected").text(), function(response) {
        console.log('main js response - signed call');
        console.log(response);
    });
});

$("#send_witness_vote").click(function() {
    steem_keychain.requestWitnessVote($("#witness_username").val(), $("#witness").val(), $("#vote_wit").is(":checked"), function(response) {
        console.log('main js response - witness vote');
        console.log(response);
    });
});

$("#send_pu").click(function() {
    steem_keychain.requestPowerUp($("#pu_username").val(), $("#pu_recipient").val(), $("#pu_steem").val(), function(response) {
        console.log('main js response - power up');
        console.log(response);
    });
});

$("#send_pd").click(function() {
    steem_keychain.requestPowerDown($("#pd_username").val(),  $("#pd_sp").val(), function(response) {
        console.log('main js response - power down');
        console.log(response);
    });
});

$("#send_create_claimed").click(function() {
    steem_keychain.requestCreateClaimedAccount($("#create_claimed_username").val(),  $("#create_claimed_new_username").val(), $("#create_claimed_owner").val(), $("#create_claimed_active").val(), $("#create_claimed_posting").val(), $("#create_claimed_memo").val(),  function(response) {
        console.log('main js response - create claimed account');
        console.log(response);
    });
});
