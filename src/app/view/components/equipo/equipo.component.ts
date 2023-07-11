import { Component } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent {
  equipo:any = [
    {id:1,name:'Rosario Ramírez',img:'',semblanza:'Educadora, Miembro de IKAJA, The International Kamishibai Association of Japan y actriz del Teatro Taller de Investigación y Experimentación Mexicana, es mediadora del Programa Nacional de Salas de Lectura y miembro de la Tropa Plú Compañía de Clown Escénico. '},
    {id:2,name:'Manu Montiel',img:'',semblanza:'Ingeniero en Audio y Creador de Manyfesto Producciones, ha colaborado como ingeniero de monitores de Eugenia León, Lila Downs y como ingeniero de sala, ha participado en festivales como el Vive Latino, Cumbre Tajín, Procanto entretenimiento, Sala Forum y Canal Once.'},
    {id:3,name:'David Velez',img:'',semblanza:'Licenciado en Procesos Educativos por la BUAP. Actualmente estudia la Maestría en Gestión de la Innovación en el Centro de Estudios Económicos, Administrativos y Sociales del Instituto Politécnico Nacional. Apasionado por la tecnología y la disrupción creativa, curioso y enérgico, impulsado por una fuerte pasión por la innovación y la experimentación.'},
    {id:4,name:'Jose Onofre Lezama',img:'',semblanza:'Técnico Superior Universitario en Infraestructura de Redes Digitales por la Universidad Tecnológica de Tehuacán. Docente de computación básica y desarrollo de Sistemas y Redes. Posee certificaciones y constancias que avalan su nivel académico, como: “Hacking Ético”, “NDG Linux Unhatched” y “IoT”. Es miembro del Programa “Juventudes Pioneras” del Instituto Poblano de la Juventud.'},
    {id:5,name:'Hugo Eduardo Sandoval Perez',img:'',semblanza:'Contador Público Auditor con 12 años de experiencia. Amante de la música y el arte en general, desarrollándose como músico independiente y en la producción de eventos por más de 8 años.'}
  ];
  becarios:any = [
    {id:1,name:'María Fernanda González Vázquez',img:'',semblanza:'Licenciada en Procesos Educativos. Es una persona proactiva, responsable y eficiente, con buenas relaciones interpersonales y con la mejor disposición para la realización de las actividades encomendadas. Siempre buscando oportunidades laborales donde pueda continuar su desarrollo personal y profesional.'},
    {id:2,name:'Kevin Antonio Ramirez Manuel',img:'',semblanza:'Estudiante de Derecho. Creativo, intrépido, leal y sin miedo a nada, es una persona que no le teme a los riesgos, siempre dispuesto a todo para explotar al máximo sus habilidades, y con una capacidad de imaginación y creación única e innovadora.'},
    {id:3,name:'Naxielli R. Arjona',img:'',semblanza:'Artista plástico y visual. Ha participado en diversas exposiciones con piezas de carácter pictórico y escultórico. Colaborando en áreas como el diseño, la moda, escenografía y maquillaje para teatro, cine y fotografía. También realiza trabajos de orfebrería, cerámica y talavera. Y funge como instructora en talleres autónomos de orfebrería, escultura, textiles e ilustración.'},
    {id:4,name:'Uzziel Rojas Torres',img:'',semblanza:'Licenciado en Administración, apasionado por la producción y postproducción de medios digitales y audiovisuales. Dispuesto a contribuir en proyectos innovadores en Yolotl, gracias a su formación en gestión empresarial y habilidades en producción. '},
    {id:5,name:'Julio Zamitiz Peña',img:'',semblanza:'Actor de Teatro y Televisión, ha fungido como asistente de producción y locutor de radio. Se considera una persona entregada a su profesión con el objetivo de dejar huella en el arte y la cultura.'}
  ];
  aliados:any = [
    {id:1,name:'Vindeya ',img:'',link:'https://www.instagram.com/vindeyaanalitica/'},
    {id:2,name:'Manyfesto Producciones',img:'',link:'https://www.instagram.com/manyfesto_producciones/'},
    {id:3,name:'Fortune cookie',img:'',link:'https://www.instagram.com/fortunecookie.studio/'},
    {id:4,name:'ARCA',img:'',link:'https://www.instagram.com/lanietov/'}
  ]
}
