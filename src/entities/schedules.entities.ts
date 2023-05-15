import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './users.entities';
import RealEstate from './realEstate.entities';

@Entity('schedules')
class Schedule{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date'})
    date: string

    @Column({type: 'time'})
    hour: string

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => RealEstate, (schedules) => schedules.schedules)
    realEstate: RealEstate
}

export default Schedule