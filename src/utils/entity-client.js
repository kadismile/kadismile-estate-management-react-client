import client from "./api-client";

// TO DO
// this file should be refactored to work for all entities since, parameters
// and resources are very similar

function handleUserResponse(response) {
  const data = response.data;
  const { resource } = data;
  const tenants = { ...resource };
  console.log('response');
  console.log(response);
  return data;
}

function getAllEntityDocuments(entity, headers) {
  return client(`api/v1/${entity}`, {
    headers
  }).then(handleUserResponse);
}

function getSingleEntityById(entity, id, headers) {
  console.log('headers!!!')
  console.log(headers)
  return client(`api/v1/${entity}/${id}`, { headers }).then(handleUserResponse);
}

function createEntity(entity, form, headers) {
  return client(`api/v1/${entity}/create`, {
    body: form,
    headers
  }).then(handleUserResponse);
}

export { getAllEntityDocuments, getSingleEntityById, createEntity };
