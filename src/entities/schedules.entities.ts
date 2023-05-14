import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './users.entities';
import RealEstate from './realEstate.entities';

@Entity('schedules')
class Schedule{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date'})
    date: Date | string

    @Column({type: 'time'})
    hour: number | string

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => RealEstate, (schedules) => schedules.schedules)
    realEstate: RealEstate
}

export default Schedule