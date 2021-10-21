<template>
  <div class="bg-white px-4 py-5 sm:rounded-lg sm:p-6 max-w-7xl mx-auto">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p class="mt-1 text-sm text-gray-500">
          Use a permanent address where you can receive mail.
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div class=" sm:overflow-hidden">
            <div class="bg-white py-6 px-4 sm:p-6">
              <div>
                <h2 id="payment-details-heading" class="text-lg leading-6 font-medium text-gray-900">Payment details</h2>
                <p class="mt-1 text-sm text-gray-500">Update your billing information. Please note that updating your location could affect your tax rates.</p>
              </div>

              <div class="mt-6 grid grid-cols-6 gap-6">

                <div class="col-span-4 sm:col-span-3">
                  <label for="object" class="block text-sm font-medium text-gray-700">Object</label>
                  <input type="text" name="object" id="object" autocomplete="cc-given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                </div>

                <div class="col-span-4 sm:col-span-3">
                  <label for="full-name" class="block text-sm font-medium text-gray-700">Full name</label>
                  <input type="text" name="full-name" id="full-name" autocomplete="cc-family-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                </div>

                <div class="col-span-4 sm:col-span-3">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                </div>

                <div class="sm:col-span-3">
                  <label for="phone-number" class="block text-sm font-medium text-blue-gray-700">
                    Phone number
                  </label>
                  <input type="text" name="phone-number" id="phone-number" autocomplete="tel" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                </div>

                <div class="sm:col-span-6">
                  <label for="description" class="block text-sm font-medium text-blue-gray-900">
                    Description
                  </label>
                  <div class="mt-1">
                    <textarea id="description" name="description" rows="4" class="block w-full border border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <p class="mt-3 text-sm text-blue-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                </div>

              </div>
            </div>
            <div class="px-4 py-3 text-right sm:px-6">
              <button type="submit" class="bg-gray-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>