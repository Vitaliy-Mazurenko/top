import { TeamMemberCardProps } from "../TeamMemberCard";
import mainSkillIcon from 'shared/assets/icons/app-store.png'
import python from 'shared/assets/icons/python.svg'
import node from 'shared/assets/icons/nodejs.svg'
import java from 'shared/assets/icons/java.png'
import js from 'shared/assets/icons/js.png'


export const mockData: TeamMemberCardProps[] = [
	{ experience: '1 year', name: 'Igor', position: 'Frontend-developer', projectsNumber: 3, speciality: 'React', teamNumber: 3, status: 'online', specialityIcon: mainSkillIcon, headerColor: '#5858b0', avatarURL: 'https://i.imgur.com/iTWSxHL.jpeg' },
	{ experience: '6 mon', name: 'Igor', position: 'Frontend-developer', projectsNumber: 3, speciality: 'React', teamNumber: 3, status: 'online', specialityIcon: python, headerColor: 'red', avatarURL: 'https://i.imgur.com/iTWSxHL.jpeg' },
	{ experience: '5 years', name: 'Igor', position: 'Frontend-developer', projectsNumber: 3, speciality: 'React', teamNumber: 3, status: 'online', specialityIcon: node, headerColor: 'darkgray', avatarURL: 'https://i.imgur.com/iTWSxHL.jpeg' },
	{ experience: '12 years', name: 'Igor', position: 'Frontend-developer', projectsNumber: 3, speciality: 'React', teamNumber: 3, status: 'online', specialityIcon: java, headerColor: '#075b5b', avatarURL: 'https://i.imgur.com/iTWSxHL.jpeg' },
	{ experience: '6 years', name: 'Igor', position: 'Frontend-developer', projectsNumber: 3, speciality: 'React', teamNumber: 3, status: 'online', specialityIcon: js, headerColor: '#bd7380', avatarURL: 'https://i.imgur.com/iTWSxHL.jpeg' },
	{ experience: '1 mon', name: 'Igor', position: 'Frontend-developer', projectsNumber: 3, speciality: 'React', teamNumber: 3, status: 'online', specialityIcon: java, headerColor: 'black', avatarURL: 'https://i.imgur.com/iTWSxHL.jpeg' },
	{ experience: '1 mon', name: 'Igor', position: 'Frontend-developer', projectsNumber: 3, speciality: 'React', teamNumber: 3, status: 'online', specialityIcon: js, headerColor: '#5858b0', avatarURL: 'https://i.imgur.com/iTWSxHL.jpeg' }
]