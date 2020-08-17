const getPage = (id) => {
  let result = id.split('/')
  return result[result.length-1];
}
export default getPage;