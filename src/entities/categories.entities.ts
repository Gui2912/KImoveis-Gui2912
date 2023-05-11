import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import RealEstate from './realEstate.entities';

@Entity('categories')
class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 45, unique: true})
    name: string;

    @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
    realEstates: RealEstate[]
}

export default Category