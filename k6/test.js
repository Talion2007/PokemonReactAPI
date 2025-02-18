import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100, // 100 usuários simultâneos
  duration: '60s', // Teste rodando por 60 segundos
};

export default function () {
  http.get('https://pokemonreactapi.vercel.app/'); // Acessa seu site
  sleep(1); // Espera 1 segundo antes de repetir a requisição
}
