const {createApp} = Vue
createApp({
    data(){
        return{

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeIndex: 0,

            error : false,

            newMessage:'',
            search: ""

        }
    },
    methods:{
        setActiveIndex(index){
            this.activeIndex= index
        },
        addMessage(activeIndex ){
            console.log('ho cliccato enter');
            i=0
            if (this.newMessage.length == 0) {
                // this.error = true
                console.log('sono nel posto sbagliato');

            } else {
                // this.newMessage.push(newMessage.message)
                const messaggio = {
                    message : this.newMessage,
                    status: 'sent',
                }
                this.contacts[activeIndex].messages.push(messaggio)
                console.log('sono qui');


                // const risposta = {
                //     message: 'ok!',
                //     status: 'received'
                // }
                // this.contacts[activeIndex].messages.push(risposta)  

           
                setTimeout(() => { 
                    const risposta = {
                        message: 'ok!',
                        status: 'received'
                    }
    
                        this.contacts[activeIndex].messages.push(risposta)
                }, 1000);

            }

            this.newMessage = ''




            // this.contacts[activeIndex].messages.push(newMessage)

        },
        searchBar() {
            // return contact.filter((contact) =>
            //   contact.name.toLowerCase().includes(input.value.toLowerCase())
            // );

          },


            // let input, filter,span, i, txtValue;
            // input = document.getElementById("search_bar");
            // span = document.getElementById("name")
            // filter = input.value.toUpperCase();
            // for ( i = 0; i < span.length; i++) {
            //     a = span[i].getElementsByTagName("a")[0];
            //     txtValue = a.textContent || a.innerText;
            //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //         span[i].style.display = "";
            //     } else {
            //         span[i].style.display = "none";
            //     }
            // }
            
            // let input = document.getElementById('searchbar').value
            // input=input.toLowerCase();
            // let x = document.getElementsByClassName('contact_name');
            // for (i = 0; i < x.length; i++) { 
            //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
            //         x[i].style.display="none";
            //     }
            //     else {
            //         x[i].style.display="lista_chat";                 
            //     }
            // }
    },
    computed: {
        filteredcontacts() {
          return this.contacts.filter(c => {
            // return true if the product should be visible
    
            // in this example we just check if the search string
            // is a substring of the product name (case insensitive)
            return c.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
          });
        }
      }
}) .mount ('#app')