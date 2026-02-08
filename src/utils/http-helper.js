export const ok = (body) => ({
  statusCode: 200,
  body,
});

export const created = () => ({
  statusCode: 201,
  body: { message: "Successful" },
});

export const noContent = () => ({
  statusCode: 204,
  body: null,
});

export const badRequest = () => ({
  statusCode: 400,
  body: { message: "Bad Request" },
});

export const notFound = () => ({
  statusCode: 404,
  body: { message: "Not Found" },
});
