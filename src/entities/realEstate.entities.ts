import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Address from './addresses.entities';
import Category from './categories.entities';
import Schedule from './schedules.entities';

@Entity('real_estate')
class RealEstate{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: false})
    sold: boolean

    @Column({default: 0, type: 'decimal'})
    value: number

    @Column({type: 'integer'})
    size: number

    @CreateDateColumn()
    createdAt?: Date | string

    @UpdateDateColumn()
    updatedAt?: Date | string

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category)
    category: Category

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[]
    
}

export default RealEstate