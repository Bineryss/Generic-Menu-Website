import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: '100%',
		flexGrow: 1
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		height: 50,
		paddingLeft: theme.spacing(4),
		backgroundColor: theme.palette.background.default
	},
	img: {
		height: 300,
		display: 'block',
		overflow: 'hidden',
		width: '100%',
		objectFit: 'cover'
	},
	stepper: {
		background: 'rgba(255, 255, 255, 0.5)',
	}
}))
