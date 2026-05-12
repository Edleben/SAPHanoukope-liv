import { Component } from '@angular/core';
import { ResolveStart } from '@angular/router';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'Adoration', date: '2024-09-01' },
      { title: 'Mariage', date: '2024-09-10' },
      { title: 'Confession', date: '2024-09-15' },
      { title: 'Messe', date: '2024-09-20' },
      { title: 'Pèlerinage', date: '2024-09-25' }
    ],
    height: 'auto',
    contentHeight: 'auto',
    aspectRatio: 1.2,
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'prev,next'
    },
    buttonText: {
      today: 'Aujourd\'hui',
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour',
      list: 'Liste'
    },
    locale: 'fr',
    firstDay: 1,
    weekends: true,
    editable: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: 2,
    navLinks: true
  }

  handleDateClick(arg: DateClickArg) {
    alert('Date sélectionnée: ' + arg.dateStr);
    console.log(this.calendarOptions);
  }
}