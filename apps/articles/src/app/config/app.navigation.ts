import { SeekNavigation } from '@swseek/ui-kit';

export const navigation: SeekNavigation[] = [
  {
    id: 'applications',
    title: 'Apps',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'calendar',
        title: 'Calendário',
        translate: 'NAV.CALENDAR',
        type: 'item',
        icon: 'today',
        url: '/apps/calendar',
      },
      {
        id: 'academy',
        title: 'Educacional',
        translate: 'NAV.ACADEMY',
        type: 'item',
        icon: 'school',
        url: '/apps/academy',
      },
      {
        id: 'chat',
        title: 'Chat',
        translate: 'NAV.CHAT',
        type: 'item',
        icon: 'chat',
        url: '/apps/chat',
        badge: {
          title: '13',
          bg: '#f9f9f9',
          fg: '#0846b6',
        },
      },
      {
        id: 'contacts',
        title: 'Contatos',
        translate: 'NAV.CONTACTS',
        type: 'item',
        icon: 'account_box',
        url: '/apps/contacts',
      },
      {
        id: 'to-do',
        title: 'Pendentes',
        translate: 'NAV.TODO',
        type: 'item',
        icon: 'check_box',
        url: '/apps/todo',
        badge: {
          title: '3',
          bg: '#f74b2d',
          fg: '#ffffff',
        },
      },
      {
        id: 'scrumboard',
        title: 'Scrumboard',
        translate: 'NAV.SCRUMBOARD',
        type: 'item',
        icon: 'assessment',
        url: '/apps/scrumboard',
      },
    ],
  },
];
