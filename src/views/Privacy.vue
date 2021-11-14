<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Belga Mobility Privacy Policy and Cookie Policy
        </h2>
        <dl class="mt-20 mb-20 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline'

const faqs = [
  {
    question: "1. General",
    answer:
        "Blacklane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred to as “Blacklane”) enables its Users to book travel services over its online platform, through the association with other online platforms, as well as through the applications for mobile devices (“Apps”, all products together, “BL Tools”). The service of Blacklane is made up only by the arrangement of an entitlement to carriage for a User over a transportation service provider (“TSP”) as an intermediate, and not in the provision of the travel service itself.\n" +
        "\n" +
        "These Terms and Conditions (hereinafter referred to as “Terms”) are part of every agreement between Users with the arrangement of a travel service by Blacklane. They also describe in detail the travel services which are offered through the direct entitlement created by Blacklane between the User and the TSP.\n" +
        "\n" +
        "Deviations from the User Terms, even in the case of letters of confirmation and unreserved services, are hereby rejected. Only if the management of Blacklane has expressly agreed in writing, does this not apply.\n" +
        "\n",
  },
  {
    question: "2. Contractual Relationship and Conclusion of Contract",
    answer:
        "Blacklane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred to as “Blacklane”) enables its Users to book travel services over its online platform, through the association with other online platforms, as well as through the applications for mobile devices (“Apps”, all products together, “BL Tools”). The service of Blacklane is made up only by the arrangement of an entitlement to carriage for a User over a transportation service provider (“TSP”) as an intermediate, and not in the provision of the travel service itself.\n" +
        "\n" +
        "These Terms and Conditions (hereinafter referred to as “Terms”) are part of every agreement between Users with the arrangement of a travel service by Blacklane. They also describe in detail the travel services which are offered through the direct entitlement created by Blacklane between the User and the TSP.\n" +
        "\n" +
        "Deviations from the User Terms, even in the case of letters of confirmation and unreserved services, are hereby rejected. Only if the management of Blacklane has expressly agreed in writing, does this not apply.\n" +
        "\n",
  },
  {
    question: "3. User Registration Requirements for the Use of BM Tools",
    answer:
        "Blacklane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred to as “Blacklane”) enables its Users to book travel services over its online platform, through the association with other online platforms, as well as through the applications for mobile devices (“Apps”, all products together, “BL Tools”). The service of Blacklane is made up only by the arrangement of an entitlement to carriage for a User over a transportation service provider (“TSP”) as an intermediate, and not in the provision of the travel service itself.\n" +
        "\n" +
        "These Terms and Conditions (hereinafter referred to as “Terms”) are part of every agreement between Users with the arrangement of a travel service by Blacklane. They also describe in detail the travel services which are offered through the direct entitlement created by Blacklane between the User and the TSP.\n" +
        "\n" +
        "Deviations from the User Terms, even in the case of letters of confirmation and unreserved services, are hereby rejected. Only if the management of Blacklane has expressly agreed in writing, does this not apply.\n" +
        "\n",
  },
  {
    question: "4. Selected Topics of the Contract of Carriage for the Benefit of the User",
    answer:
        "Blacklane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred to as “Blacklane”) enables its Users to book travel services over its online platform, through the association with other online platforms, as well as through the applications for mobile devices (“Apps”, all products together, “BL Tools”). The service of Blacklane is made up only by the arrangement of an entitlement to carriage for a User over a transportation service provider (“TSP”) as an intermediate, and not in the provision of the travel service itself.\n" +
        "\n" +
        "These Terms and Conditions (hereinafter referred to as “Terms”) are part of every agreement between Users with the arrangement of a travel service by Blacklane. They also describe in detail the travel services which are offered through the direct entitlement created by Blacklane between the User and the TSP.\n" +
        "\n" +
        "Deviations from the User Terms, even in the case of letters of confirmation and unreserved services, are hereby rejected. Only if the management of Blacklane has expressly agreed in writing, does this not apply.\n" +
        "\n",
  },
  {
    question: "5. Compensation and Payment",
    answer:
        "Blacklane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred to as “Blacklane”) enables its Users to book travel services over its online platform, through the association with other online platforms, as well as through the applications for mobile devices (“Apps”, all products together, “BL Tools”). The service of Blacklane is made up only by the arrangement of an entitlement to carriage for a User over a transportation service provider (“TSP”) as an intermediate, and not in the provision of the travel service itself.\n" +
        "\n" +
        "These Terms and Conditions (hereinafter referred to as “Terms”) are part of every agreement between Users with the arrangement of a travel service by Blacklane. They also describe in detail the travel services which are offered through the direct entitlement created by Blacklane between the User and the TSP.\n" +
        "\n" +
        "Deviations from the User Terms, even in the case of letters of confirmation and unreserved services, are hereby rejected. Only if the management of Blacklane has expressly agreed in writing, does this not apply.\n" +
        "\n",
  },
  {
    question: "6. Liability",
    answer:
        "Blacklane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred to as “Blacklane”) enables its Users to book travel services over its online platform, through the association with other online platforms, as well as through the applications for mobile devices (“Apps”, all products together, “BL Tools”). The service of Blacklane is made up only by the arrangement of an entitlement to carriage for a User over a transportation service provider (“TSP”) as an intermediate, and not in the provision of the travel service itself.\n" +
        "\n" +
        "These Terms and Conditions (hereinafter referred to as “Terms”) are part of every agreement between Users with the arrangement of a travel service by Blacklane. They also describe in detail the travel services which are offered through the direct entitlement created by Blacklane between the User and the TSP.\n" +
        "\n" +
        "Deviations from the User Terms, even in the case of letters of confirmation and unreserved services, are hereby rejected. Only if the management of Blacklane has expressly agreed in writing, does this not apply.\n" +
        "\n",
  },
  {
    question: "7. Changes to the Offer by Blacklane",
    answer:
        "Blacklane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred to as “Blacklane”) enables its Users to book travel services over its online platform, through the association with other online platforms, as well as through the applications for mobile devices (“Apps”, all products together, “BL Tools”). The service of Blacklane is made up only by the arrangement of an entitlement to carriage for a User over a transportation service provider (“TSP”) as an intermediate, and not in the provision of the travel service itself.\n" +
        "\n" +
        "These Terms and Conditions (hereinafter referred to as “Terms”) are part of every agreement between Users with the arrangement of a travel service by Blacklane. They also describe in detail the travel services which are offered through the direct entitlement created by Blacklane between the User and the TSP.\n" +
        "\n" +
        "Deviations from the User Terms, even in the case of letters of confirmation and unreserved services, are hereby rejected. Only if the management of Blacklane has expressly agreed in writing, does this not apply.\n" +
        "\n",
  },
  {
    question: "8. Protection of Content, Granting of Rights of Use to BL Tools",
    answer:
        "Blacklane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred to as “Blacklane”) enables its Users to book travel services over its online platform, through the association with other online platforms, as well as through the applications for mobile devices (“Apps”, all products together, “BL Tools”). The service of Blacklane is made up only by the arrangement of an entitlement to carriage for a User over a transportation service provider (“TSP”) as an intermediate, and not in the provision of the travel service itself.\n" +
        "\n" +
        "These Terms and Conditions (hereinafter referred to as “Terms”) are part of every agreement between Users with the arrangement of a travel service by Blacklane. They also describe in detail the travel services which are offered through the direct entitlement created by Blacklane between the User and the TSP.\n" +
        "\n" +
        "Deviations from the User Terms, even in the case of letters of confirmation and unreserved services, are hereby rejected. Only if the management of Blacklane has expressly agreed in writing, does this not apply.\n" +
        "\n",
  },
  {
    question: "9. Final Provisions",
    answer:
        "Blacklane GmbH, Feurigstraße 59, 10827 Berlin (hereinafter referred to as “Blacklane”) enables its Users to book travel services over its online platform, through the association with other online platforms, as well as through the applications for mobile devices (“Apps”, all products together, “BL Tools”). The service of Blacklane is made up only by the arrangement of an entitlement to carriage for a User over a transportation service provider (“TSP”) as an intermediate, and not in the provision of the travel service itself.\n" +
        "\n" +
        "These Terms and Conditions (hereinafter referred to as “Terms”) are part of every agreement between Users with the arrangement of a travel service by Blacklane. They also describe in detail the travel services which are offered through the direct entitlement created by Blacklane between the User and the TSP.\n" +
        "\n" +
        "Deviations from the User Terms, even in the case of letters of confirmation and unreserved services, are hereby rejected. Only if the management of Blacklane has expressly agreed in writing, does this not apply.\n" +
        "\n",
  },

  // More questions...
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      faqs,
    }
  },
}
</script>