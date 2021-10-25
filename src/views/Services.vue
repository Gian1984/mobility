<template>
<div class="bg-gray-800">
    <div class="pt-6 pb-16 sm:pb-24">
      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <span class="md:block">Belga mobility</span>
                  {{ ' ' }}
                  <span class="text-indigo-400 md:block">Service de chauffeur privé</span>
                </h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Chaque course est privilégiée. BELGA Mobility vous assure une solution de transport imaginée selon vos besoins professionnels ou privés
                </p>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">



              <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                  <h2 class="mt-6 text-left text-3xl font-extrabold text-white">
                    Réservez votre trajet
                  </h2>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form class="space-y-6" action="#" method="POST">
                    <!-- **START** Distance / hourly tab -->
                      <div>
                        <div class="sm:hidden">
                          <label for="tabs" class="sr-only">Select a tab</label>
                          <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                          <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
                          </select>
                        </div>
                        <div class="hidden sm:block">
                          <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                            <a v-for="(tab, tabIdx) in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10']" :aria-current="tab.current ? 'page' : undefined">
                              <span>{{ tab.name }}</span>
                              <span aria-hidden="true" :class="[tab.current ? 'bg-indigo-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
                            </a>
                          </nav>
                        </div>
                      </div>
                    <!-- **END** Distance / hourly tab -->

                      <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">
                          Pick up
                        </label>
                        <div class="mt-1">
                          <input id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                      </div>

                      <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">
                          Drop off
                        </label>
                        <div class="mt-1">
                          <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>


  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Nos services</h2>

        <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
              <div class="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" alt="" />
              </div>
              <div class="sm:col-span-2">
                <div class="space-y-4">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3>{{ person.name }}</h3>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">{{ person.bio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>


  <Newsletter></Newsletter>
  <Contact></Contact>

</template>

<script>
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";

const people = [
  {
    name: 'Longue distance',
    imageUrl:
        'img/e_inside.jpg',
    bio:
        'La voiture devient la prolongation de votre bureau. Chargeur, Wifi, eau et autres attentions personnelles sont prévues à cet effet. Le chauffeur assure votre intimité.',
  },
  {
    name: 'Service horaire',
    imageUrl:
        'img/clock.jpg',
    bio:
        'Votre chauffeur privé prend connaissance de votre planning. Il vous indiquera les heures de départs et vous donnera à chaque arrêt un point de rendez-vous clair visuellement.',
  },
  {
    name: 'Transfert aéroport',
    imageUrl:
        'img/station.jpg',
    bio:
        'Gagnez 40 minutes en évitant les files. Notre chauffeur privé assure un suivi permanent des vols. Il vous attendra à la sortie de votre vol, avec une pancarte personnalisée et d’autres attentions personnelles. Vol en retard ? Votre chauffeur vous attend. Transfert disponible au départ et à destination de Brussels Airport Zaventem, Brussels South Charleroi, Liège Aéroport ou Ostende Aéroport.',
  },
  {
    name: 'Transfert gare',
    imageUrl:
        'img/station.jpg',
    bio:
        'Gagnez 40 minutes en évitant les files. Notre chauffeur privé assure un suivi permanent des trains. Il vous attendra à la sortie de votre voyage, avec une pancarte personnalisée et d’autres attentions personnelles. Train en retard ? Votre chauffeur vous attend.',
  },
  {
    name: 'Délégation diplomatique',
    imageUrl:
        'img/diplomatic.jpg',
    bio:
        'Votre chauffeur privé adapte la mise à disposition aux enjeux et aux imprévus de la mission. Au besoin, Belga Mobility débloque des solutions de transport dans l’heure.',
  },
  {
    name: 'Mariage',
    imageUrl:
        'img/wedding.jpg',
    bio:
        'Un mariage c’est un jour inoubliable mais aussi stressant. Le chauffeur vous assure une bulle d’air de décompression dans sa voiture ainsi qu’une ambiance de fête selon vos goûts!',
  },
  {
    name: 'Event',
    imageUrl:
        'img/event.jpg',
    bio:
        'Dans un esprit de travail d’équipe, Belga Mobility co-organise les transports et le planning avec vous. Malgré les imprévus, les chauffeurs s’assurent que tous les invités ou collaborateurs soient conduits au lieu de rendez-vous.',
  },
  {
    name: 'Tour',
    imageUrl:
        'img/tour.jpg',
    bio:
        'Découvrez le patrimoine belge grâce à nos voitures de luxe avec chauffeur privé.',
  },



// More people...
]

export default {

  components: {
    Contact,
    Newsletter,
  },

  setup() {
    return {
      people,
    }
  },
}
</script>