import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    transition('* => ProfilePage', slideTo('left')),
    transition('ProfilePage => *', slideTo('right')),
    transition('* => MsgPage', slideTo('right')),
    transition('MsgPage => *', slideTo('left')),
    transition('* => IdolPage', slideTo('right')),
    transition('IdolPage => *', slideTo('left')),
  ]);

function slideTo(direction): any {
  return [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], {optional: true}),
    query(':enter', [
      style({ [direction]: '-100%'})
    ], {optional: true}),
    query(':leave', animateChild(), {optional: true}),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ [direction]: '100%'}))
      ], {optional: true}),
      query(':enter', [
        animate('300ms ease-out', style({ [direction]: '0%'}))
      ], {optional: true})
    ]),
    query(':enter', animateChild(), {optional: true})];
}

