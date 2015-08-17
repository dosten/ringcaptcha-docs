Verification
============

Sending a PIN code
------------------

You start by requesting a PIN code to be sent using any enabled service for the
application key such as SMS or VOICE. This endpoint is streamlined to ensure
deliverability of the PIN code to the desired phone number. Logic includes
dynamically determining the best route based on latency and delivery rates,
phone number normalization based on 200+ dialing plans, blacklists and others.

Verifying the PIN code
----------------------

After the user has received the code, you will need to execute one last HTTP
request with the PIN code the user received to close the verification loop.
This step ensures the transactions is authentic and verifies the PIN code
inserted by the user matches the one sent via SMS/Voice. This endpoint will also
return available information of the phone number, like the carrier, type,
normalized phone number, etc.

