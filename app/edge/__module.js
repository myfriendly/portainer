import angular from 'angular';

angular.module('portainer.edge', []).config([
  '$stateRegistryProvider',
  function($stateRegistryProvider) {
    const edge = {
      name: 'edge',
      url: '/edge',
      parent: 'root',
      abstract: true
    };

    const batchActions = {
      name: 'edge.batchActions',
      url: '/batchactions',
      views: {
        'content@': {
          template: '<div>batch actions</div>'
        }
      }
    };

    const batchActionsNew = {
      name: 'edge.batchActions.new',
      url: '/new',
      views: {
        'content@': {
          template: '<div>b a new</div>'
        }
      }
    };

    const batchActionsEdit = {
      name: 'edge.batchActions.edit',
      url: '/:batchActionId/edit',
      views: {
        'content@': {
          template: '<div>b a edit</div>'
        }
      }
    };

    const deploymentGroups = {
      name: 'edge.deploymentGroups',
      url: '/deploymentgroups',
      views: {
        'content@': {
          component: 'deploymentGroupsView'
        }
      }
    };

    const deploymentGroupsNew = {
      name: 'edge.deploymentGroups.new',
      url: '/new',
      views: {
        'content@': {
          component: 'createDeploymentGroupView'
        }
      }
    };

    const deploymentGroupsEdit = {
      name: 'edge.deploymentGroups.edit',
      url: '/:deploymentGroupId',
      views: {
        'content@': {
          component: 'editDeploymentGroupView'
        }
      }
    };

    $stateRegistryProvider.register(edge);
    $stateRegistryProvider.register(batchActions);
    $stateRegistryProvider.register(batchActionsNew);
    $stateRegistryProvider.register(batchActionsEdit);
    $stateRegistryProvider.register(deploymentGroups);
    $stateRegistryProvider.register(deploymentGroupsEdit);
    $stateRegistryProvider.register(deploymentGroupsNew);
  }
]);
