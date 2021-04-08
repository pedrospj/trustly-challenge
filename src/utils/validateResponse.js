function validateResponse(pageResponse) {
  const { status } = pageResponse;
  // check status code
  if (status > 399 && status < 600) {
    throw {
      status: 'error',
      statusCode: status,
      message: pageResponse.statusText,
    };
  }
}

module.exports = validateResponse;
