const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getAgenda: asyn () => {
				const store = getStore();

				await fetch("https://playground.4geeks.com/apis/fake/contact/MariaHurtado");
				const jsonResponse = await Response.json();

				setStore(( contacts : jsonResponse));
			},

			addContact: (contactData) =>{
				const store = getState();

				await fetch("https://playground.4geeks.com/apis/fake/contact",{
					method: "POST",
					headers: ("contactType" : "application/json"),
					body: JSON.stringify({
						"full_name": contactData.fullName,
						"email" : contactData.email,
						"agenda_slug" : contactData.agendaSlug,
						"address" : contactData.address,
						"phone" : contactData.phone,
					}
					)
				})

			}
			}
		}
	};
};

export default getState;
