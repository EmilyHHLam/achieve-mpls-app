/**
* Admin Users Controller
* @desc controls the Admin Users View
* @param AdminService
* @return
*/

myApp.controller('AdminUsersController', ['AdminService', '$mdPanel',
function(AdminService, $mdPanel, mdPanelRef){
  var users = this;
  users.roleArray = ['9', '12'];
  users.sessionArray = [1,2,3,4,5,6,7,8,9,10];
  this._mdPanel = $mdPanel;


  users.showDialog = function(el) {
    var target = el.target;
    var position = this._mdPanel.newPanelPosition()
        .absolute()
        .center();

    var config = {
      attachTo: angular.element(document.body),
      templateUrl: 'views/partials/newUserForm.html',
      panelClass: 'demo-dialog-example',
      position: position,
      trapFocus: true,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

    this._mdPanel.open(config);
  };


    this._mdPanelRef = mdPanelRef;


  users.closeDialog = function() {
    this._mdPanelRef && this._mdPanelRef.close().then(function() {
      angular.element(document.querySelector('.demo-dialog-open-button')).focus();
    });
  };

}]);
