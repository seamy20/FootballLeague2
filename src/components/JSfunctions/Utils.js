import axios from 'axios';
import $ from 'jquery';

export const SESSION_UPDATE = 'SESSION_UPDATE';
export const SESSION_UPDATE_SUCCESS = 'SESSION_UPDATE_SUCCESS';


export function SendEmail(name, email, subject, body) {
	//mandrill email creation
	var mandrill = require('mandrill-api/mandrill');
	var mandrill_client = new mandrill.Mandrill('API KEY');

	//date scheduling
	let current_datetime = new Date()
	let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth()) + "-" + current_datetime.getDate() + " " + (current_datetime.getHours() - 1) + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()

	var message = {
		"html": body,
		"text": "Thank you for contacting Budget Energy",
		"subject": subject,
		"from_email": "no-reply@budgetenergy.co.uk",
		"from_name": "Budget Energy Ltd",
		"to": [{
			"email": email,
			"name": email,
			"type": "to"
		}],
		"headers": {
			"Reply-To": "no-reply@budgetenergy.co.uk"
		},
		"important": false,
		"track_opens": null,
		"track_clicks": null,
		"auto_text": null,
		"auto_html": null,
		"inline_css": null,
		"url_strip_qs": null,
		"preserve_recipients": null,
		"view_content_link": null,
		"tracking_domain": null,
		"signing_domain": null,
		"return_path_domain": null,
		"merge": true,
		"merge_language": "mailchimp",
	};
	var async = false;
	var ip_pool = "Main Pool";
	var send_at = formatted_date;
	mandrill_client.messages.send({ "message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at }, function (result) {
		console.log(result);
		/*
		[{
				"email": "recipient.email@example.com",
				"status": "sent",
				"reject_reason": "hard-bounce",
				"_id": "abc123abc123abc123abc123abc123"
			}]
		*/
	}, function (e) {
		// Mandrill returns the error as an object with name and message keys
		console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
		// A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
	});
}


export function SendCustomerConfirmationEmail(name, email, subject, body) {
	//mandrill email creation
	var mandrill = require('mandrill-api/mandrill');
	var mandrill_client = new mandrill.Mandrill('API KEY');

	//date scheduling
	let current_datetime = new Date()
	let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth()) + "-" + current_datetime.getDate() + " " + (current_datetime.getHours() - 1) + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()

	var message = {
		"html": body,
		"text": "Thank you for contacting Budget Energy",
		"subject": subject,
		"from_email": "no-reply@budgetenergy.co.uk",
		"from_name": "Budget Energy Ltd",
		"to": [{
			"email": email,
			"name": email,
			"type": "to"
		}],
		"headers": {
			"Reply-To": "no-reply@budgetenergy.co.uk"
		},
		"important": false,
		"track_opens": null,
		"track_clicks": null,
		"auto_text": null,
		"auto_html": null,
		"inline_css": null,
		"url_strip_qs": null,
		"preserve_recipients": null,
		"view_content_link": null,
		"tracking_domain": null,
		"signing_domain": null,
		"return_path_domain": null,
		"merge": true,
		"merge_language": "mailchimp",
	};
	var async = false;
	var ip_pool = "Main Pool";
	var send_at = formatted_date;
	mandrill_client.messages.send({ "message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at }, function (result) {
		console.log(result);
		/*
		[{
				"email": "recipient.email@example.com",
				"status": "sent",
				"reject_reason": "hard-bounce",
				"_id": "abc123abc123abc123abc123abc123"
			}]
		*/
	}, function (e) {
		// Mandrill returns the error as an object with name and message keys
		console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
		// A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
	});
}

export function Validation(fieldValue, elementID, fieldType, fieldRequired) {
	var validation = null;
	switch (fieldType) {
		case "text":
			validation = /^[_a-z A-Z]{3,}/gm;
			break;
		case "emailValidation":
			validation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			break;
	}

	if (fieldValue === "" && fieldRequired === true) {
		document.getElementById(elementID).setAttribute("class", "invalidFeild-outline");
	}
	else if (fieldRequired === false) {
		document.getElementById(elementID).setAttribute("class", "validFeild-outline");
	}
	else if (!fieldValue.match(validation)) {
		document.getElementById(elementID).setAttribute("class", "invalidFeild-outline");
	}
	else {
		document.getElementById(elementID).setAttribute("class", "validFeild-outline");
	}
}

export function LoadPageContent(page) {

	var loc = window.location;
	var jurisdiction = '';
	//check jurisdiction
	if (loc.href.includes("beenergy")) {
		jurisdiction = "roi";
	}
	else {
		jurisdiction = "ni";
	}

	axios.get(window.$api + 'pagecontent/' + page + '/' + jurisdiction)
		.then(res => {
			const pageContent = res.data;

			for (var i = 0; i < pageContent.length; i++) {

				//get element on the page using className
				var element = $("." + pageContent[i].className);
				//set the value of the class using text
				if (element.length > 0) {
					for (var x = 0; x < element.length; x++) {
						switch (element[0].nodeName) {
							case "IMG":
								element[x].src = pageContent[i].text;
								break;

							case "P":
								element[x].innerHTML = pageContent[i].text;
								break;
							case "H5":
								element[x].innerHTML = pageContent[i].text;
								break;
							case "H4":
								element[x].innerHTML = pageContent[i].text;
								break;

							case "A":
								element[x].href = pageContent[i].text;
								break;

							case "STRONG":
								element[x].innerHTML = pageContent[i].text;
								break;
						}
					}
				}
			}
		}
	);
}




export function LoadTariffContent(tariff) {

	var loc = window.location;
	var jurisdiction = '';
	//check jurisdiction
	if (loc.href.includes("beenergy")) {
		jurisdiction = "roi";
	}
	else {
		jurisdiction = "ni";
	}

	axios.get(window.$api + 'tariffcontent/' + tariff + '/' + jurisdiction)
		.then(res => {
			const pageContent = res.data;

			for (var i = 0; i < pageContent.length; i++) {

				//get element on the page using className
				var element = $("." + pageContent[i].className);
				//set the value of the class using text
				if (element.length > 0) {
					for (var x = 0; x < element.length; x++) {
						switch (element[0].nodeName) {
							case "IMG":
								element[x].src = pageContent[i].text;
								break;

							case "P":
								element[x].innerHTML = pageContent[i].text;
								break;
							case "H2":
									element[x].innerHTML = pageContent[i].text;
									break;
							case "H3":
									element[x].innerHTML = pageContent[i].text;
									break;
							case "H5":
								element[x].innerHTML = pageContent[i].text;
								break;
							case "H4":
								element[x].innerHTML = pageContent[i].text;
								break;

							case "A":
								element[x].href = pageContent[i].text;
								break;

							case "STRONG":
								element[x].innerHTML = pageContent[i].text;
								break;
						}
					}
				}
			}
		}
	);
}



export function FixedNavActive() {

	var loc = window.location.href;

	loc = loc.split("/")[3];

	switch (loc) {
		case "home":
			$(".home").addClass("activeNavLink");
			$(".business").removeClass("activeNavLink");
			$(".about").removeClass("activeNavLink");
			$(".help").removeClass("activeNavLink");
			break;

		case "business":
			$(".business").addClass("activeNavLink");
			$(".home").removeClass("activeNavLink");
			$(".about").removeClass("activeNavLink");
			$(".help").removeClass("activeNavLink");
			break;

		case "about":
			$(".about").addClass("activeNavLink");
			$(".home").removeClass("activeNavLink");
			$(".business").removeClass("activeNavLink");
			$(".help").removeClass("activeNavLink");
			break;

		case "help":
			$(".help").addClass("activeNavLink");
			$(".home").removeClass("activeNavLink");
			$(".business").removeClass("activeNavLink");
			$(".about").removeClass("activeNavLink");
			break;

		default:
			$(".home").addClass("activeNavLink");
			$(".business").removeClass("activeNavLink");
			$(".about").removeClass("activeNavLink");
			$(".help").removeClass("activeNavLink");
			break;
	}
}



export async function TrackCustomerComplaint(complaintID, PIN) {

	let result = await axios.get(window.$api + 'complaints/' + complaintID + '/' + PIN);

	return result;
}


export function updateSettings(id, item) {
    //debugger;
    return {
        payload: {
            request: {
                method: 'PUT', // UPDATE RECORD
                url: 'http://budgetwebtest/api/users/' + id,
                data: {
                    ...item
                }
            }
        }
    }
}


// export function updateSettings(id, item) {
// 	return dispatch => {
// 	  console.log(item)
// 	  return axios.put(`https://localhost:44346/api/users/${id}`, item).then(response => {
// 		  console.log(response)
// 	  })
// 	}
//   }


//issue with communicating between the web server with https and the below request at http. 
//https giving error - VM115:1 OPTIONS https://localhost:3000/api/users net::ERR_SSL_PROTOCOL_ERROR
export async function postDatatoDb(url, {data}) {

    axios({
		url: url,
		method: 'post',
		data: data
	  })
	  .then(function (response) {
		  // your action after success
		  console.log(response);
	  })
	  .catch(function (error) {
		 // your action on error success
		  console.log(error);
	  });
}


