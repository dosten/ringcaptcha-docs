PHP
===

A PHP client for RingCaptcha supporting PHP 5.2 or higher. It'a available as a
Apache 2 licensed Open Source library.

Installation
------------

There are various ways to install the PHP integration for RingCaptcha.
The recommended way is to use `Composer`_:

.. code-block:: bash

    composer require ringcaptcha/ringcaptcha-php:~1.0

Alternatively you can manually install it:

1.  Download and extract the latest `ringcaptcha-php`_ library in your PHP project.

2.  Require the library in your application:

    .. code-block:: php

        require_once '/path/to/lib/Ringcaptcha.php';

Configuration
-------------

The most important part is the creation of the client. Create it once and
reference it from anywhere you want to interface with RingCaptcha:

.. code-block:: php

    $client = new Ringcaptcha('__PUBLIC_KEY__', '__SECRET_KEY__');

Usage
-----

In order to finish a verification process, you need to verify the received PIN code.

.. code-block:: php

    $valid = $client->isValid($_POST['ringcaptcha_pin_code'], $_POST['ringcaptcha_session_id']);

    if (!$valid) {
        throw new Exception();
    }

    $id = $client->getId();
    $number = $client->getPhoneNumber();

.. _Composer: https://getcomposer.org/
.. _ringcaptcha-php: https://github.com/ringcaptcha/ringcaptcha-php/archive/1.0.zip
