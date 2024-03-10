import axios from 'axios';


async function kirimAPI() {
  try {
    const response = await axios.get('https://api.telegram.org/bot6549992062:AAGrixmb7BxI48VoP2rr11RbnghJ6oG5fY4/sendMessage?parse_mode=markdown&chat_id=6659361902&text=Anda%20Salah%20Target%20Bung');
    console.log(response.data);
  } catch (error) {
    console.error(error);
    kirimAPI();
  }
}


for (let i = 0; i < 1000; i++) {
  kirimAPI();  
}
