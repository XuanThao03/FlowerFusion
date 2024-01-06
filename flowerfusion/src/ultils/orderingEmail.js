import emailjs from '@emailjs/browser';

const orderEmail = params => {
  emailjs
    .send('service_1w7l3fx', 'template_9fgpuex', params, 'h6_h9sd2eOewzefPM')
    .then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      },
    );
};
export default orderEmail;
