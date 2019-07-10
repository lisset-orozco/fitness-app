<head>
  <style>
    img.border {
      border: 1px solid black;
    }

    img.width_1 {
      width:460px;
      height:auto;
    }

    img.width_2 {
      width:680px;
      height:auto;
    }
  </style>
</head>



# Fitness App

This project is a Fitness Exercise website to learn React JS thanks to the developer Raul Palacios following his video tutorials on [Youtube](https://www.youtube.com/watch?v=yFAIMEupsuo&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo).
<br/>
### All Exercises
<p align="center">
  <img src="assets/images/5_all_exercise.png" title="all_exercise" style="border:1px solid black; width:460px; height:auto;">
</p>
<br/>
<p align="center">
  <img src="assets/images/6_all_exercise_2.png" title="all_exercise_2" class='border width_2'>
</p>

#
### New Exercise

<div align="center">
  <img src="assets/images/2_new_exercise.png" title="new_exercise" class='border width_1'>
  <br/><br/>
  <h4>Form with validation in case of not filling the fields</h4>
  <img src="assets/images/3_form_validation.png" title="form_validation" class='border width_1'>
  <br/><br/>
  <h4>Filling all the fields</h4>
  <img src="assets/images/4_form_info.png" title="form_info" class='border width_1'>
</div>

#
### Detail Exercise

<div align="center">
  <h4>The card can be deleted or edited</h4>
  <img src="assets/images/7_detail_exercise.png" title="detail_exercise" class='border width_1'>
  <br/><br/>
  <h4>Edit</h4>
  <img src="assets/images/8_edit_exercise.png" title="edit_exercise" class='border width_1'>
  <h4>Delete</h4>
  <img src="assets/images/15_delete_modal.png" title="edit_exercise" class='border width_1'>
  <h4>Confirm Delete </h4>
  <img src="assets/images/16_delete_confirm.png" title="edit_exercise" class='border width_1'>
</div>


#
### Notifications
<div align="center">
  <h4>Create</h4>
  <img src="assets/images/12_created.png" title="detail_exercise" class='border width_1'>
  <br/><br/>
  <h4>Update</h4>
  <img src="assets/images/14_updated.png" title="edit_exercise" class='border width_1'>
  <h4>Delete</h4>
  <img src="assets/images/13_deleted.png" title="edit_exercise" class='border width_1'>
</div>

#
### No Results Found

<div align="center">
  <h4>In case there is no data the following page will be shown</h4>
  <img src="assets/images/1_no_results.png" title="no_results" class='border width_1'>
</div>

#
### Invalid Page

<div align="center">
  <h4>In case the page does not exist</h4>
  <img src="assets/images/10_error_page.png" title="error_page" class='border width_1'>
</div>

#
### Server Error

<div align="center">
  <h4>In case the server is not active</h4>
  <img src="assets/images/9_error_server.png" title="error_server" class='border width_1'>
</div>

#
# API

### Configuration

#### `/src/config.js`
```sh
const url_api = 'http://localhost:8000/api';

export { url_api };
```
##
### REQUEST

`url_api` is used in: `src/services/AxiosClient.js`
##
#### Get all exercises

> **GET** `{BASE_URL}/exercises`

> `response`:
> ```json
>[
>  {
>    "id":1,
>    "title":"Yoga",
>    "description":"Flexibility and strength",
>    "img":"https://image.flaticon.com/icons/...../exercise1.png",
>    "leftColor":"#00f4f3",
>    "rightColor":"#ff00ed"
>  },
>  {
>    "id":2,
>    "title":"Technique Guides",
>    "description":"Learn amazing street workout and calisthenics",
>    "img":"https://image.flaticon.com/icons/...../exercise2.png",
>    "leftColor":"#0142f7",
>    "rightColor":"#ff9e00"
>  },
>  {
>   "id":3,
>    "title":"Skills Training!!",
>    "description":"Learn the secrets of bodyweight technique",
>    "img":"https://image.flaticon.com/icons/...../exercise3.png",
>    "leftColor":"#00f200",
>    "rightColor":"#9a57ee"
>  }
>]
> ```
##
#### Get an exercise

> **GET** `{BASE_URL}/exercises/:id`

> `response`:
> ```json
>{
>  "exercise":{
>    "id":1,
>    "title":"Yoga",
>    "description":"Flexibility and strength",
>    "img":"https://image.flaticon.com/icons/...../exercise1.png",
>    "leftColor":"#00f4f3",
>    "rightColor":"#ff00ed"
>  }
>}
> ```
##
#### Create an exercise

> **POST** `{BASE_URL}/exercises`

> `request`:
> ```json
>{  
>  "title":"Strength Training",
>  "description":"Train anytime, everywere and become a superhero!",
>  "img":"https://image.flaticon.com/icons/...../exercise4.png",
>  "leftColor":"#8efa00",
>  "rightColor":"#531b93"
>}

> `response:`
> ```json
>{
>  "exercise":{ 
>    "title":"Strength Training",
>    "description":"Train anytime, everywere and become a superhero!",
>    "img":"https://image.flaticon.com/icons/...../exercise4.png",
>    "leftColor":"#8efa00",
>    "rightColor":"#531b93",
>    "id": 4
>  }
>}
> ```
##
#### Update an exercise

> **PUT** `{BASE_URL}/exercises/:id`

> `request`:
> ```json
>{
>  "id":3,
>  "title":"Skills Training",
>  "description":"Learn the secrets of bodyweight technique",
>  "img":"https://image.flaticon.com/icons/...../exercise3.png",
>  "leftColor":"#00f200",
>  "rightColor":"#ff9300"
>}
> ```

> `response`:
> ```json
>{
>  "exercise":{
>    "id":3,
>    "title":"Skills Training",
>    "description":"Learn the secrets of bodyweight technique",
>    "img":"https://image.flaticon.com/icons/...../exercise3.png",
>    "leftColor":"#00f200",
>    "rightColor":"#ff9300"
>  }
>}
> ```

#
#### Delete an exercise
> **DELETE** `{BASE_URL}/exercises/:id`

> `response`:
> ```json
> {
>  "msg":"deleted"
>}
> ```

### API Project

Link
> https://github.com/lisset-orozco/FitnessAPI

`$ npm install`
`$ npm start`

or

`$ yarn install`
`$ yarn start`

