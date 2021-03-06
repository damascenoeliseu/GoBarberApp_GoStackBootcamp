import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
   beforeEach(() => {
      fakeAppointmentsRepository = new FakeAppointmentsRepository();
      listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
         fakeAppointmentsRepository,
      );
   });

   it('should be able to list the month availability from provider', async () => {
      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 8, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 9, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 10, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 11, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 12, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 13, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 14, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 15, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 16, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 10, 17, 0, 0),
      });

      await fakeAppointmentsRepository.create({
         provider_id: 'user',
         user_id: 'user',
         date: new Date(2021, 0, 11, 8, 0, 0),
      });

      const availability = await listProviderMonthAvailability.execute({
         provider_id: 'user',
         year: 2021,
         month: 1,
      });

      expect(availability).toEqual(
         expect.arrayContaining([
            { day: 9, available: true },
            { day: 10, available: false },
            { day: 11, available: true },
            { day: 12, available: true },
         ]),
      );
   });
});
