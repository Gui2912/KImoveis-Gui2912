import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import * as bcrypt from 'bcrypt'
import Schedule from './schedules.entities';

@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 50 })
    name: string;

    @Column({ type: "varchar", length: 50, unique: true })
    email: string;

    @Column({ default: false })
    admin: boolean;

    @Column({ type: "varchar", length: 120 })
    password: string;

    @CreateDateColumn({type: "date"})
    createdAt?:Date | string;

    @UpdateDateColumn({type: "date"})
    updatedAt?:Date | string;

    @DeleteDateColumn({nullable: true})
    deletedAt: Date | null | undefined;

    @BeforeInsert()
    async hashPassword() {
        const hasedPassword = await bcrypt.hash(this.password, 10)
        this.password = hasedPassword
    }

    @OneToMany(() => Schedule, (schedule) => schedule.user)
    schedules: Schedule[]
}   

export default User