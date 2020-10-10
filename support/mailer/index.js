// import nodemailer from 'nodemailer'
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
// import smtpTransport from 'nodemailer-smtp-transport'
// var config = require('../config/global');
// const config = require('../config/global')
const transport = nodemailer.createTransport((smtpTransport({
  'host': 'smtp.stackmail.com',
  'secure': true, // use SSL
  'port': 465, // port for secure SMTP
  'auth': {
    'user': 'info@top9deals.com',
    'pass': 'S@!E6a6a'
  }
})))

var _self = {

  mail_header: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">' +
    '<html xmlns="http://www.w3.org/1999/xhtml">' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>' +
    '</head>' +
    '<body>' +
    '<center><img src="https://secureservercdn.net/104.238.69.231/h7t.247.myftpupload.com/wp-content/uploads/2020/05/cropped-BSD-logo-1.png" style="height:50px;width:100px;"></center></br>' +
    '<div style="min-height: 20px;"> </div>',

  mail_footer: '<div style="min-height: 20px;"></div><center>Copyright &copy; 2020 <a href= "https://bestshoppingdeal.in" target="_blank">bestshoppingdeal.in</a>. All rights reserved.</center></body></html>',

  mail: (options, callback) => {
    if (!options || !options.to || !options.from || !options.subject || !options.html) {
      return callback('Invalid parametes', null)
    }

    var mailOptions = {
      to: options.to,
      from: options.from, // From   : xCode Team<xcode@agileinfoways.com>
      subject: options.subject, // Subject  : Email verification
      // html: _self.mail_header + options.html + _self.mail_footer // Body    : HTML content/Plain text
      html: options.html
    }

    if (typeof callback === 'function')
      transport.sendMail(mailOptions, callback)
    else
      transport.sendMail(mailOptions)
  }
}

module.exports = _self
