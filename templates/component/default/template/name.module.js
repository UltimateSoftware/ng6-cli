import <%=name_camel%>Component from './<%= name %>.<% if( cli.request.options.directive || cli.request.options.d ) { %>directive<% } else { %>component<% } %>';

const module = angular.module('<%= moduleName %>', []);

module.<% if( cli.request.options.directive || cli.request.options.d ) { %>directive<% } else { %>component<% } %>('<%= name_camel %>', <%=name_camel%>Component);
<% if( cli.request.options.view || cli.request.options.v ) { %>
//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('<%= name %>', {
      url: '/<%= name %>',
      template: '<<%= name %>></<%= name %>>'
    });
});
<% } %>
export default module.name;
