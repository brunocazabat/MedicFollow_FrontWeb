# Refonte_FrontWeb

Current Stakeholders of the Repository:

```
    Bruno Cazabat (bruno.cazabat@epitech.eu)
    Simon Bernabeu (simon.bernabeu@epitech.eu)
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Components

```
📦components
 ┣ 📂back-related
 ┃ ┣ 📂router
 ┃ ┃ ┣ 📂site-vitrine
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜index.min.js
 ┃ ┃ ┃ ┣ 📜rte-vitrine.js
 ┃ ┃ ┃ ┗ 📜rte-vitrine.min.js
 ┃ ┃ ┣ 📂UNIVERSAL
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜index.min.js
 ┃ ┃ ┃ ┣ 📜rte-errors.js
 ┃ ┃ ┃ ┣ 📜rte-errors.min.js
 ┃ ┃ ┃ ┣ 📜rte-lock.js
 ┃ ┃ ┃ ┣ 📜rte-lock.min.js
 ┃ ┃ ┃ ┣ 📜rte-login.js
 ┃ ┃ ┃ ┗ 📜rte-login.min.js
 ┃ ┃ ┣ 📂users-specific
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜index.min.js
 ┃ ┃ ┃ ┣ 📜rte-admin.js
 ┃ ┃ ┃ ┣ 📜rte-admin.min.js
 ┃ ┃ ┃ ┣ 📜rte-confiance.js
 ┃ ┃ ┃ ┣ 📜rte-confiance.min.js
 ┃ ┃ ┃ ┣ 📜rte-docteur.js
 ┃ ┃ ┃ ┣ 📜rte-docteur.min.js
 ┃ ┃ ┃ ┣ 📜rte-organisation.js
 ┃ ┃ ┃ ┣ 📜rte-organisation.min.js
 ┃ ┃ ┃ ┣ 📜rte-patient.js
 ┃ ┃ ┃ ┣ 📜rte-patient.min.js
 ┃ ┃ ┃ ┣ 📜rte-personnel.js
 ┃ ┃ ┃ ┣ 📜rte-personnel.min.js
 ┃ ┃ ┃ ┣ 📜rte-proche.js
 ┃ ┃ ┃ ┗ 📜rte-proche.min.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜index.min.js
 ┃ ┣ 📂state
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┃ ┣ 📜fetchApi.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜layout.js
 ┃ ┃ ┃ ┣ 📜notification.js
 ┃ ┃ ┃ ┣ 📜patient.js
 ┃ ┃ ┃ ┗ 📜security.js
 ┃ ┃ ┣ 📜axiosResponse.js
 ┃ ┃ ┣ 📜helpers.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┗ 📜meeting.js
 ┗ 📂view-related
 ┃ ┣ 📂dashboard-components
 ┃ ┃ ┣ 📜calendar.js
 ┃ ┃ ┣ 📜chat.vue
 ┃ ┃ ┣ 📜GenericButton.vue
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜schedule.vue
 ┃ ┃ ┗ 📜widget.vue
 ┃ ┣ 📂drag-drop
 ┃ ┃ ┗ 📜drag-drop.vue
 ┃ ┣ 📂form-components
 ┃ ┃ ┣ 📂bug-report
 ┃ ┃ ┃ ┗ 📜bug-report.vue
 ┃ ┃ ┣ 📂contact-us
 ┃ ┃ ┃ ┗ 📜contact-us.vue
 ┃ ┃ ┗ 📂suggestions
 ┃ ┃ ┃ ┗ 📜suggestion.vue
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂layout-components
 ┃ ┃ ┃ ┣ 📂menu-components
 ┃ ┃ ┃ ┃ ┣ 📜menu-navlink.vue
 ┃ ┃ ┃ ┃ ┣ 📜navlinks.js
 ┃ ┃ ┃ ┃ ┣ 📜navlinks.min.js
 ┃ ┃ ┃ ┃ ┗ 📜navlink_generic.vue
 ┃ ┃ ┃ ┣ 📂nav-bar-components
 ┃ ┃ ┃ ┃ ┣ 📜dark-mode.vue
 ┃ ┃ ┃ ┃ ┣ 📜full-screen.vue
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜lang.vue
 ┃ ┃ ┃ ┃ ┗ 📜notification.vue
 ┃ ┃ ┃ ┣ 📜cookies.vue
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜menu.vue
 ┃ ┃ ┃ ┣ 📜nav-bar.vue
 ┃ ┃ ┃ ┣ 📜page-header.vue
 ┃ ┃ ┃ ┗ 📜right-bar.vue
 ┃ ┃ ┗ 📜main.vue
 ┃ ┣ 📂login-components
 ┃ ┃ ┣ 📜admin-panel-log-module.vue
 ┃ ┃ ┣ 📜bug-report-panel-unloged.vue
 ┃ ┃ ┣ 📜footer-module.vue
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜logo-header-module.vue
 ┃ ┃ ┣ 📜particles-module.vue
 ┃ ┃ ┗ 📜translate-module.vue
 ┃ ┣ 📂main-chat
 ┃ ┃ ┣ 📜chat.vue
 ┃ ┃ ┗ 📜data.js
 ┃ ┣ 📂setting-components
 ┃ ┃ ┗ 📜setting.vue
 ┃ ┣ 📂staff-input-components
 ┃ ┃ ┣ 📜calendar.vue
 ┃ ┃ ┣ 📜chat.vue
 ┃ ┃ ┣ 📜data.js
 ┃ ┃ ┣ 📜useSubmitButtonState.js
 ┃ ┃ ┗ 📜utils.js
 ┃ ┣ 📂widgets
 ┃ ┃ ┣ 📜dropZone.vue
 ┃ ┃ ┣ 📜lottie.vue
 ┃ ┃ ┗ 📜recaptchav2.vue
 ┃ ┣ 📜badge-icon.vue
 ┃ ┣ 📜badge-list.vue
 ┃ ┣ 📜calendarModule.vue
 ┃ ┣ 📜input.vue
 ┃ ┣ 📜list-table.vue
 ┃ ┣ 📜modal.vue
 ┃ ┣ 📜select.vue
 ┃ ┗ 📜tableComponent.vue
```

## Views

```
📦views
 ┣ 📂site-vitrine
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜contact.vue
 ┃ ┃ ┣ 📜counter.vue
 ┃ ┃ ┣ 📜faq.vue
 ┃ ┃ ┣ 📜footer.vue
 ┃ ┃ ┣ 📜history.vue
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜intro.vue
 ┃ ┃ ┣ 📜navbar.vue
 ┃ ┃ ┣ 📜project.vue
 ┃ ┃ ┣ 📜signupnow.vue
 ┃ ┃ ┣ 📜solutions.vue
 ┃ ┃ ┣ 📜tarification.vue
 ┃ ┃ ┣ 📜team.vue
 ┃ ┃ ┣ 📜timeline.vue
 ┃ ┃ ┗ 📜usage.vue
 ┃ ┗ 📜index.vue
 ┣ 📂UNIVERSAL
 ┃ ┣ 📂errors-section
 ┃ ┃ ┣ 📜403.vue
 ┃ ┃ ┣ 📜404.vue
 ┃ ┃ ┣ 📜500.vue
 ┃ ┃ ┗ 📜maintenance.vue
 ┃ ┗ 📂log-account-section
 ┃ ┃ ┣ 📜forgot-password-success.vue
 ┃ ┃ ┣ 📜forgot-password.vue
 ┃ ┃ ┣ 📜loading-screen.vue
 ┃ ┃ ┣ 📜lockscreen.vue
 ┃ ┃ ┣ 📜login.vue
 ┃ ┃ ┣ 📜logout.vue
 ┃ ┃ ┣ 📜register-fill-success.vue
 ┃ ┃ ┣ 📜register-fill.vue
 ┃ ┃ ┣ 📜register-mail-success.vue
 ┃ ┃ ┗ 📜register-mail.vue
 ┗ 📂users-specific
 ┃ ┣ 📂admin
 ┃ ┃ ┣ 📂dashboard-section
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜table-admin-bug.vue
 ┃ ┃ ┃ ┃ ┣ 📜table-admin-org.vue
 ┃ ┃ ┃ ┃ ┗ 📜table-admin-sug.vue
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┗ 📜table-admin.vue
 ┃ ┃ ┣ 📂manageorgas-section
 ┃ ┃ ┃ ┗ 📜manageorgas.vue
 ┃ ┃ ┣ 📂seereportssuggest-section
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜bug-report-table.vue
 ┃ ┃ ┃ ┃ ┗ 📜suggestions-table.vue
 ┃ ┃ ┃ ┗ 📜seereportsuggest.vue
 ┃ ┃ ┗ 📂settings-section
 ┃ ┃ ┃ ┗ 📜setting.vue
 ┃ ┣ 📂confiance
 ┃ ┃ ┣ 📂calendar-section
 ┃ ┃ ┃ ┣ 📜calendar.vue
 ┃ ┃ ┃ ┗ 📜utils.js
 ┃ ┃ ┣ 📂chat-section
 ┃ ┃ ┃ ┣ 📜chat.vue
 ┃ ┃ ┃ ┗ 📜data.js
 ┃ ┃ ┣ 📂dashboard-section
 ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┃ ┣ 📂download-section
 ┃ ┃ ┃ ┣ 📂tableComponents
 ┃ ┃ ┃ ┃ ┗ 📜tableSelectFile.vue
 ┃ ┃ ┃ ┣ 📜download-page.vue
 ┃ ┃ ┃ ┣ 📜fileTable.vue
 ┃ ┃ ┃ ┗ 📜getObservations.js
 ┃ ┃ ┣ 📂forms-section
 ┃ ┃ ┃ ┣ 📜bugreport.vue
 ┃ ┃ ┃ ┣ 📜bugReportModules.vue
 ┃ ┃ ┃ ┣ 📜contactUsModule.vue
 ┃ ┃ ┃ ┗ 📜feedbackModules.vue
 ┃ ┃ ┣ 📂incoming-appointments
 ┃ ┃ ┃ ┗ 📜meetings.vue
 ┃ ┃ ┣ 📂medical-information
 ┃ ┃ ┃ ┣ 📂tableComponents
 ┃ ┃ ┃ ┃ ┗ 📜tableSelectPatient.vue
 ┃ ┃ ┃ ┣ 📜checkup-text.vue
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┣ 📜patientTable.vue
 ┃ ┃ ┃ ┗ 📜widgets.vue
 ┃ ┃ ┣ 📂meeting
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┗ 📜tableShowAppointments.vue
 ┃ ┃ ┗ 📂settings-section
 ┃ ┃ ┃ ┗ 📜setting.vue
 ┃ ┣ 📂docteur
 ┃ ┃ ┣ 📂calendar-section
 ┃ ┃ ┃ ┣ 📜calendar.vue
 ┃ ┃ ┃ ┗ 📜utils.js
 ┃ ┃ ┣ 📂chat-section
 ┃ ┃ ┃ ┗ 📜chat.vue
 ┃ ┃ ┣ 📂dashboard-section
 ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┃ ┣ 📂forms-section
 ┃ ┃ ┃ ┣ 📜bugreport.vue
 ┃ ┃ ┃ ┣ 📜bugReportModules.vue
 ┃ ┃ ┃ ┣ 📜contactUsModule.vue
 ┃ ┃ ┃ ┗ 📜feedbackModules.vue
 ┃ ┃ ┣ 📂managepatients-section
 ┃ ┃ ┃ ┣ 📜managePatients.js
 ┃ ┃ ┃ ┗ 📜managepatients.vue
 ┃ ┃ ┣ 📂medical-information
 ┃ ┃ ┃ ┣ 📂tableComponents
 ┃ ┃ ┃ ┃ ┗ 📜tableSelectPatient.vue
 ┃ ┃ ┃ ┣ 📜checkup-text.vue
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┣ 📜patientTable.vue
 ┃ ┃ ┃ ┗ 📜widgets.vue
 ┃ ┃ ┣ 📂settings-section
 ┃ ┃ ┃ ┣ 📜daysOfTheWeekCheck.vue
 ┃ ┃ ┃ ┣ 📜schedule-settings.vue
 ┃ ┃ ┃ ┣ 📜scheduleModule.vue
 ┃ ┃ ┃ ┗ 📜setting.vue
 ┃ ┃ ┗ 📂staff-input
 ┃ ┃ ┃ ┣ 📜fieldModule.vue
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┗ 📜useSubmitButtonState.js
 ┃ ┣ 📂organisation
 ┃ ┃ ┣ 📂dashboard-section
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📜table-orga-doc.vue
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┗ 📜table-orga.vue
 ┃ ┃ ┣ 📂forms-section
 ┃ ┃ ┃ ┣ 📜bugreport.vue
 ┃ ┃ ┃ ┣ 📜bugReportModules.vue
 ┃ ┃ ┃ ┣ 📜contactUsModule.vue
 ┃ ┃ ┃ ┗ 📜feedbackModules.vue
 ┃ ┃ ┣ 📂managedoctors-section
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜manage-doctors-table.vue
 ┃ ┃ ┃ ┃ ┗ 📜manage-personnel-table.vue
 ┃ ┃ ┃ ┗ 📜managedoctors.vue
 ┃ ┃ ┗ 📂settings-section
 ┃ ┃ ┃ ┗ 📜setting.vue
 ┃ ┣ 📂patient
 ┃ ┃ ┣ 📂calendar-section
 ┃ ┃ ┃ ┣ 📜calendar.vue
 ┃ ┃ ┃ ┗ 📜utils.js
 ┃ ┃ ┣ 📂chat-section
 ┃ ┃ ┃ ┣ 📜chat.vue
 ┃ ┃ ┃ ┗ 📜data.js
 ┃ ┃ ┣ 📂dashboard-section
 ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┃ ┣ 📂forms-section
 ┃ ┃ ┃ ┣ 📜bugreport.vue
 ┃ ┃ ┃ ┣ 📜bugReportModules.vue
 ┃ ┃ ┃ ┣ 📜contactUsModule.vue
 ┃ ┃ ┃ ┗ 📜feedbackModules.vue
 ┃ ┃ ┣ 📂medical-information
 ┃ ┃ ┃ ┣ 📜checkup-text.vue
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┗ 📜widgets.vue
 ┃ ┃ ┗ 📂settings-section
 ┃ ┃ ┃ ┗ 📜setting.vue
 ┃ ┣ 📂personnel
 ┃ ┃ ┣ 📂calendar-section
 ┃ ┃ ┃ ┣ 📜calendar.vue
 ┃ ┃ ┃ ┗ 📜utils.js
 ┃ ┃ ┣ 📂chat-section
 ┃ ┃ ┃ ┣ 📜chat.vue
 ┃ ┃ ┃ ┗ 📜data.js
 ┃ ┃ ┣ 📂dashboard-section
 ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┃ ┣ 📂forms-section
 ┃ ┃ ┃ ┣ 📜bugreport.vue
 ┃ ┃ ┃ ┣ 📜bugReportModules.vue
 ┃ ┃ ┃ ┣ 📜contactUsModule.vue
 ┃ ┃ ┃ ┣ 📜feedbackModules.vue
 ┃ ┃ ┃ ┗ 📜suggest.vue
 ┃ ┃ ┣ 📂managepatients-section
 ┃ ┃ ┃ ┗ 📜managepatients.vue
 ┃ ┃ ┣ 📂medical-information
 ┃ ┃ ┃ ┣ 📜checkup-text.vue
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┗ 📜widgets.vue
 ┃ ┃ ┣ 📂settings-section
 ┃ ┃ ┃ ┗ 📜setting.vue
 ┃ ┃ ┗ 📂staff-input
 ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┗ 📂proche
 ┃ ┃ ┣ 📂calendar-section
 ┃ ┃ ┃ ┣ 📜calendar.vue
 ┃ ┃ ┃ ┗ 📜utils.js
 ┃ ┃ ┣ 📂dashboard-section
 ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┃ ┣ 📂forms-section
 ┃ ┃ ┃ ┣ 📜bugreport.vue
 ┃ ┃ ┃ ┣ 📜bugReportModules.vue
 ┃ ┃ ┃ ┣ 📜contactUsModule.vue
 ┃ ┃ ┃ ┗ 📜feedbackModules.vue
 ┃ ┃ ┗ 📂settings-section
 ┃ ┃ ┃ ┗ 📜setting.vue
```
