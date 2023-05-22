import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class EmployeeEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id;

    @Column({type: String})
    @length(5, 100, { message: 'The column length must be between 5 and 100 characters.' })
    full_name;

    @Column({type: String})
    job_title;

    @Column({type: Number})
    phone_number;

    @Column({type: String})
    email;

    @Column({type: String})
    state;

    @Column({type: String})
    city;

    @Column({type: String})
    address;

    @Column({type: String})
    primary_emergency_contact_name;

    @Column({type: Number})
    primary_emergency_contact_number;

    @Column({type: String})
    relationship;



}