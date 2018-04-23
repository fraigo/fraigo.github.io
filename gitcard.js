
Vue.component("gitcard",{
    props:[
        "repo",
        "image"
    ],
    template:`
  <v-flex xs12 sm6 pa-1 v-if="repo.has_pages">
    <v-card>
      <v-card-media :src="image" height="160px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{repo.name}}</h3>
          <div>
            <i >{{repo.html_url}}</i>
            <div style="height:50px;overflow:hidden">
            {{repo.description}}
            </div>
            <div style="height:16px;overflow:hidden">
            <small v-if="repo.license">{{repo.license.name}}</small>
            <small v-if="repo.license">{{repo.language}}</small>
            </div>
          </div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat color="orange">GitHub Repo</v-btn>
        <v-btn v-if="repo.has_pages" @click="openPage(repo.name)" flat color="orange">GitHub Pages</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
    `,
    methods: {
      getPage: function(name){
        return "https://fraigo.github.io/"+name+"/";
      },
      openPage: function(name){
        window.open(this.getPage(name), "_blank");
      }
    }
})