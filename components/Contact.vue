<template>
  <!-- Contact Us -->
  <div class="max-w-[85rem] bg-gradient-to-r from-gray-100 to-gray-300 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Container for demo purpose -->
    <!-- Contact Us -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="max-w-2xl lg:max-w-5xl mx-auto">
        <div class="sxt-left">
          <h2 class="text-lg font-semibold leading-8 text-blue-300">
            Speak to us
          </h2>
          <p class="mt-2 text-3xl text-left font-bold tracking-tight text-gray-900 sm:text-4xl">
            We’ll Get Back To <br />
            You Within 24hrs
          </p>
        </div>

        <div
          class="mt-12 grid items-center rounded-xl lg:bg-gray-50 dark:lg:bg-darker shadow-2xl lg:grid-cols-2 gap-6 lg:gap-16">
          <!-- Card -->
          <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-100">
            <h2 class="mb-8 text-xl font-semibold text-blue-300 dark:text-gray-200">
              Fill in the form
            </h2>

            <form>
              <div class="  ">
                <form @submit="handleSubmit">
                  <div class="form-group mb-6">
                    <input required="required" v-model="name" type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7" placeholder="Name" />
                    <div />
                  </div>
                  <div class="form-group mb-6">
                    <input required="required" v-model="email" type="email"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput8" placeholder="Email address" />
                  </div>
                  <div class="form-group mb-6">
                    <textarea required="required"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea13" rows="3" placeholder="Message" v-model="Message"></textarea>
                  </div>

                  <button onclick="showMessage()" type="submit"
                    class="w-full px-6 py-2.5 bg-blue-300 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-400 hover:shadow-lg transition duration-150 ease-in-out">
                    Send an inquiry
                  </button>
                  <p class="text-gree" v-if="isSuccess">Message sent.</p>
                </form>
              </div>
              <!-- End Grid -->

              <div class="mt-3 text-center">
                <p id="messages" class="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
          <!-- End Card -->

          <div class="divide-y divide-gray-200 dark:divide-gray-800">
            <!-- Icon Block -->
            <div class="flex gap-x-7 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M19 12q0-2.925-2.038-4.963T12 5V3q1.875 0 3.513.713t2.85 1.924q1.212 1.213 1.925 2.85T21 12h-2Zm-4 0q0-1.25-.875-2.125T12 9V7q2.075 0 3.538 1.463T17 12h-2Zm4.95 9q-3.225 0-6.288-1.438t-5.425-3.8q-2.362-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L6.975 10.9q1.05 1.8 2.638 3.375T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9Zm8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475l-1.675 1.675ZM6.025 9Zm8.95 8.95Z" />
              </svg>
              <div>
                <h3 class="font-semibold text-gray-800 dark:text-gray-200">
                  Give us a call
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  We're here to help with any questions or code.
                </p>
                <h1
                  class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                  Contact us on 0117586123
                </h1>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="flex gap-x-7 py-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M15.95 21.575q-.2 0-.375-.062t-.325-.213l-2.85-2.85q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l2.15 2.15l4.95-4.95q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-5.65 5.65q-.15.15-.325.213t-.375.062ZM4 6l8 5l8-5H4Zm0 14q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v4.35l-1 1l-1 1V8l-7.475 4.675q-.125.075-.263.113t-.262.037q-.125 0-.263-.037t-.262-.113L4 8v10h5.15l2 2H4Zm8-6Zm0-3Zm0 1.875Z" />
              </svg>
              <div>
                <h3 class="font-semibold text-gray-800 dark:text-gray-200">
                  Contact us by email
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  If you wish to write us an email instead please use
                </p>
                <p class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#">
                  deams@deams.com
                </p>
              </div>
            </div>
            <!-- End Icon Block -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Contact Us -->
    <!-- Container for demo purpose -->
  </div>
  <!-- End Contact Us -->
</template>
  
<script>
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,

      };

      alert("Message has been submitted");
      let messages = document.getElementById("messages")
      messages.textContent = "thank you for sending us a message"
      messages.style.color = "green";
      axios
        .post("http://localhost:3000/register", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
  
<style>
.max-w-\[85rem\] {
  max-width: 125rem;
}

.form-control {
  border: border solid red 1px;
}
</style>
  