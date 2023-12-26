import emailjs from '@emailjs/browser';

const otpEmail = params => {
  emailjs
    .send('service_32cvm54', 'template_820uf2n', params, '7beaQSbI_ePACoK5c')
    .then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      },
    );
};
export default otpEmail;
