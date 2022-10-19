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
 ┃ ┗ 📂state
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜layout.js
 ┃ ┃ ┃ ┣ 📜notification.js
 ┃ ┃ ┃ ┗ 📜security.js
 ┃ ┃ ┣ 📜helpers.js
 ┃ ┃ ┗ 📜store.js
 ┗ 📂view-related
 ┃ ┣ 📂dashboard-components
 ┃ ┃ ┣ 📜chat.vue
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜schedule.vue
 ┃ ┃ ┗ 📜widget.vue
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂layout-components
 ┃ ┃ ┃ ┣ 📂menu-components
 ┃ ┃ ┃ ┃ ┣ 📂user-specific
 ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navlink_admin.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navlink_confiance.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navlink_docteur.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navlink_organisation.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navlink_patient.vue
 ┃ ┃ ┃ ┃ ┃ ┣ 📜navlink_personnel.vue
 ┃ ┃ ┃ ┃ ┃ ┗ 📜navlink_proche.vue
 ┃ ┃ ┃ ┃ ┗ 📜menu-navlink.vue
 ┃ ┃ ┃ ┣ 📂nav-bar-components
 ┃ ┃ ┃ ┃ ┣ 📜dark-mode.vue
 ┃ ┃ ┃ ┃ ┣ 📜full-screen.vue
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┣ 📜lang.vue
 ┃ ┃ ┃ ┃ ┗ 📜notification.vue
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜menu.vue
 ┃ ┃ ┃ ┣ 📜nav-bar.vue
 ┃ ┃ ┃ ┣ 📜page-header.vue
 ┃ ┃ ┃ ┗ 📜right-bar.vue
 ┃ ┃ ┗ 📜main.vue
 ┃ ┣ 📂login-components
 ┃ ┃ ┣ 📜admin-panel-log-module.vue
 ┃ ┃ ┣ 📜footer-module.vue
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜logo-header-module.vue
 ┃ ┃ ┣ 📜particles-module.vue
 ┃ ┃ ┗ 📜translate-module.vue
 ┃ ┣ 📂staff-input-components
 ┃ ┃ ┣ 📜calendar.vue
 ┃ ┃ ┣ 📜chat.vue
 ┃ ┃ ┣ 📜data.js
 ┃ ┃ ┣ 📜useSubmitButtonState.js
 ┃ ┃ ┗ 📜utils.js
 ┃ ┗ 📂widgets
 ┃ ┃ ┣ 📜dropZone.vue
 ┃ ┃ ┣ 📜lottie.vue
 ┃ ┃ ┗ 📜recaptchav2.vue
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
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂banner
 ┃ ┃ ┃ ┣ 📜Banner_1.png
 ┃ ┃ ┃ ┣ 📜Banner_2.png
 ┃ ┃ ┃ ┣ 📜Banner_solution_1.jpg
 ┃ ┃ ┃ ┣ 📜Banner_solution_2.jpg
 ┃ ┃ ┃ ┗ 📜Home_banner.png
 ┃ ┃ ┣ 📂blog
 ┃ ┃ ┃ ┣ 📜drapeau-europeen.jpg
 ┃ ┃ ┃ ┣ 📜hopital_metz.jpg
 ┃ ┃ ┃ ┗ 📜hopital_perpignan.jpg
 ┃ ┃ ┣ 📂mocks
 ┃ ┃ ┃ ┣ 📜banner-1.png
 ┃ ┃ ┃ ┣ 📜banner-2.png
 ┃ ┃ ┃ ┗ 📜banner-3.png
 ┃ ┃ ┣ 📂shape
 ┃ ┃ ┃ ┣ 📜404-Error-02.png
 ┃ ┃ ┃ ┣ 📜404-Error-1.png
 ┃ ┃ ┃ ┣ 📜education-shape.png
 ┃ ┃ ┃ ┣ 📜shape1.png
 ┃ ┃ ┃ ┣ 📜shape2.png
 ┃ ┃ ┃ ┣ 📜shape3.png
 ┃ ┃ ┃ ┗ 📜testimonial.png
 ┃ ┃ ┣ 📂team
 ┃ ┃ ┃ ┣ 📜user-1.jpg
 ┃ ┃ ┃ ┣ 📜user-2.jpg
 ┃ ┃ ┃ ┣ 📜user-3.jpg
 ┃ ┃ ┃ ┣ 📜user-4.jpg
 ┃ ┃ ┃ ┣ 📜user-5.jpg
 ┃ ┃ ┃ ┣ 📜user-6.jpg
 ┃ ┃ ┃ ┣ 📜user-7.jpg
 ┃ ┃ ┃ ┗ 📜user-8.jpg
 ┃ ┃ ┣ 📜bruh.mp4
 ┃ ┃ ┣ 📜close.png
 ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┣ 📜loader.svg
 ┃ ┃ ┣ 📜next.png
 ┃ ┃ ┗ 📜prev.png
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
 ┃ ┃ ┃ ┣ 📂side-admin-widgets
 ┃ ┃ ┃ ┃ ┣ 📜add-orga.vue
 ┃ ┃ ┃ ┃ ┣ 📜modif-orga.vue
 ┃ ┃ ┃ ┃ ┗ 📜reportsuggest.vue
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
 ┃ ┃ ┣ 📂forms-section
 ┃ ┃ ┃ ┣ 📜bugreport.vue
 ┃ ┃ ┃ ┣ 📜bugReportModules.vue
 ┃ ┃ ┃ ┣ 📜contactUsModule.vue
 ┃ ┃ ┃ ┗ 📜feedbackModules.vue
 ┃ ┃ ┣ 📂medical-information
 ┃ ┃ ┃ ┣ 📜checkup-text.vue
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┗ 📜widgets.vue
 ┃ ┃ ┣ 📂meeting
 ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┃ ┗ 📂settings-section
 ┃ ┃ ┃ ┗ 📜setting.vue
 ┃ ┣ 📂docteur
 ┃ ┃ ┣ 📂calendar-section
 ┃ ┃ ┃ ┣ 📜calendar.vue
 ┃ ┃ ┃ ┗ 📜utils.js
 ┃ ┃ ┣ 📂chat-section
 ┃ ┃ ┃ ┣ 📜chat.vue
 ┃ ┃ ┃ ┗ 📜data.js
 ┃ ┃ ┣ 📂dashboard-section
 ┃ ┃ ┃ ┣ 📜addMedicalInformation.vue
 ┃ ┃ ┃ ┣ 📜addPatient.vue
 ┃ ┃ ┃ ┣ 📜index.vue
 ┃ ┃ ┃ ┣ 📜managePatients.vue
 ┃ ┃ ┃ ┗ 📜setupMeeting.vue
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
 ┃ ┃ ┃ ┗ 📜index.vue
 ┃ ┃ ┣ 📂forms-section
 ┃ ┃ ┃ ┣ 📜bugreport.vue
 ┃ ┃ ┃ ┣ 📜bugReportModules.vue
 ┃ ┃ ┃ ┣ 📜contactUsModule.vue
 ┃ ┃ ┃ ┗ 📜feedbackModules.vue
 ┃ ┃ ┣ 📂managedoctors-section
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
