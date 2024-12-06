import chalk from 'chalk';
import sleep from 'sleep';
import figlet from 'figlet';
const text = '<Hello_world />';

const stili = [
    chalk.red.bold, 
    chalk.green.underline, 
    chalk.yellow.bold, 
    chalk.magenta.dim, 
    chalk.cyan.inverse,
    chalk.blue.bold, 
    chalk.cyan.italic,
];

const  print_random_color = (text) =>  {
const coloreCasuale1 = stili[Math.floor(Math.random() * stili.length)];
const coloreCasuale2 = stili[Math.floor(Math.random() * stili.length)];
const coloreCasuale3 = stili[Math.floor(Math.random() * stili.length)];
const coloreCasuale4 = stili[Math.floor(Math.random() * stili.length)];
const coloreCasuale5 = stili[Math.floor(Math.random() * stili.length)];
    return `${coloreCasuale1(text)} ${coloreCasuale2(text)} ${coloreCasuale3(text)} ${coloreCasuale4(text)} ${coloreCasuale5(text)}`;
}

const coloraFigletRandom = (testo) => {
 // Genera il testo in ASCII con figlet
 figlet(testo, (err, data) => {
    if (err) {
        console.error('Errore con figlet:', err);
        return;
    }
    // Suddividi il testo in righe
    const righe = data.split('\n');
    // Colora ogni carattere (lettera) in ogni riga
    const righeColorate = righe.map(riga => {
        return riga.split('').map(carattere => {
            // Se il carattere non è uno spazio, applica uno stile casuale
            if (carattere !== ' ') {
                const stileRandom = stili[Math.floor(Math.random() * stili.length)];
                return stileRandom(carattere);
            }
            return carattere; // Mantieni gli spazi invariati
        }).join(''); // Ricostruisci la riga
    });
    // Stampa il testo colorato
    console.log(righeColorate.join('\n'));
});
};


let i=0 ;
while(i < 1){
    sleep.msleep(200);
  let Hello_world_text = print_random_color(text);
    console.log(Hello_world_text)
  i++;
}

coloraFigletRandom(text);

