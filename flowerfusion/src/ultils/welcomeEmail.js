import emailjs from '@emailjs/browser';

const sendEmail = params => {
  emailjs
    .send('service_32cvm54', 'template_1158atm', params, '7beaQSbI_ePACoK5c')
    .then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      },
    );
};
export default sendEmail;
