const resolveRoutes = (route) => {
  
  if(route.length <= 3){
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  if(route.length === 7){
    let validRoute = 'characters/:id';
    return validRoute;
  }
  return `/${route}`;
}
export default resolveRoutes;