import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './users.entities';
import RealEstate from './realEstate.entities';

@Entity('schedules')
class Schedule{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date'})
    date: Date

    @Column()
    hour: number

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate
}

export default Schedule