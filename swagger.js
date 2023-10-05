import swagger from 'swagger-autogen';

const outputFile = 'swagger.json';
const endPoints = ['./routes/router.js']

swagger(outputFile, endPoints);