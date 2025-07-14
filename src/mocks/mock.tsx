import {InfoList} from "../types/SideBarItem.tsx";

export const genderList = [
    // { id: "", fullName: "Не указано"},
    {id: 'male', fullName: "Мужской"},
    {id: 'female', fullName: "Женский"}
];

export const roomTypeList = [
    {id: 'in_room', fullName: "Удобства в номере"},
    {id: 'in_block', fullName: "Удобства в блоке"}
];

export const flourList = [
    {id: '1floor', fullName: "1 этаж"},
    {id: '2floor', fullName: "2 этаж"}
];

export const buildList = [
    {id: "", fullName: "Не указано"},
    {id: '4building', fullName: "4 корпус"},
    {id: '6building', fullName: "6 корпус"}
];

export const roomCategoryList = [
    {id: "", fullName: "Не указано"},
    {id: '1cat', fullName: "Двухкомнатный номер на 1 этаже в 4 корпусе с удобствами в номере"},
    {id: '2cat', fullName: "Двухместный номер на 1 этаже в 4 корпусе с удобствами в блоке"},
    {id: '3cat', fullName: "Двухместный номер на 1 этаже в 4 корпусе с удобствами в номере"},
    {id: '4cat', fullName: "Одноместный номер на 1 этаже в 4 корпусе с удобствами в номере"},
    {id: '5cat', fullName: "Двухместный номер на 2 этаже в 4 корпусе с удобствами в блоке"},
    {id: '6cat', fullName: "Двухместный номер на 1 этаже в 6 корпусе с удобствами в номере"},
    {id: '7cat', fullName: "Двухместный номер на 2 этаже в 6 корпусе с удобствами в номере"}
];

export const hepatitisList: InfoList[] = [
    {id: 'not', fullName: "Не болел"},
    {id: 'a_hep', fullName: "Гепатит A"},
    {id: 'b_hep', fullName: "Гепатит B"},
    {id: 'c_hep', fullName: "Гепатит C"},
    {id: 'd_hep', fullName: "Гепатит D"},
    {id: 'e_hep', fullName: "Гепатит E"},
    {id: 'g_hep', fullName: "Гепатит G"},
];

export const statesList: InfoList[] = [
    {id: 'good', fullName: "Удовлетворительное"},
    {id: 'middle', fullName: "Средней степени тяжести"},
    {id: 'serve', fullName: "Тяжелое"},
    {id: 'extreme', fullName: "Крайней степени тяжести"},
];

export const bodiesList: InfoList[] = [
    {id: 'asthenic', fullName: "Астеническое"},
    {id: 'normal', fullName: "Нормостеническое"},
    {id: 'hypersthenic', fullName: "Гиперстеническое"},
];

export const painList: InfoList[] =
    [{id: 'painful', fullName: "Болезненный"},
        {id: 'painless', fullName: "Безболезнненый"}];

export const deformList: InfoList[] = [
    {id: 'has', fullName: "С видимыми деформациями"},
    {id: 'not', fullName: "Без видимых деформаций"}
];

export const dietList = [
    {id: '5diet', fullName: "№5"},
    {id: '9diet', fullName: "№9"},
    {id: '10diet', fullName: "№10"},
    {id: 'ovd_diet', fullName: "ОВД"},
];

export const procedureTimeList = [
    {id: 'every_day', fullName: "Ежедневно"},
    {id: 'one_in_2_days', fullName: "Раз в 2 дня"}
];

export const typeTourList = [
    {id: 'social', fullName: "По контракту (льгота)"},
    {id: 'usual', fullName: "За свои деньги"},
    {id: 'hotel', fullName: "Только проживание"},
    {id: 'therapy', fullName: "Только лечение"}
];
