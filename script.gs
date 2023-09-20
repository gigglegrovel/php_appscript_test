
function getActiveEditorEmail() {
  var sheet = SpreadsheetApp.openById('1bXgCIWmISFLy-E1mveMa_RCvJGZuUXziLh0QTOAhiWA');
  var user = Session.getActiveUser();
  sheet.getRange('B1').setValue(user.getEmail());
}

function getDate() {
  var sheet = SpreadsheetApp.openById('1bXgCIWmISFLy-E1mveMa_RCvJGZuUXziLh0QTOAhiWA');
  var date = new Date();
  sheet.getRange('B2').setValue(date.toDateString());
}

function getTime() {
  var sheet = SpreadsheetApp.openById('1bXgCIWmISFLy-E1mveMa_RCvJGZuUXziLh0QTOAhiWA');
  var date = new Date();
  sheet.getRange('B3').setValue(date.toTimeString());
}

function lockRange() {
  var sheet = SpreadsheetApp.openById('1bXgCIWmISFLy-E1mveMa_RCvJGZuUXziLh0QTOAhiWA');
  var range = sheet.getRange('A1:B3');
  var protection = range.protect().setDescription('Protected Range');
  var me = Session.getActiveUser();
  protection.addEditor(me);
  protection.removeEditors(protection.getEditors());
  if (protection.canDomainEdit()) {
    protection.setDomainEdit(false);
  }
}
