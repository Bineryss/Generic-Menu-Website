import { makeStyles, Theme, createStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			backdropFilter: 'blur(8px)',
		},
		title: {
			fontFamily: 'Rubik',
			marginBottom: '1em',
			fontWeight: 'bold'
		},
		image: {
			maxWidth: '100%'
		},
		closeButton: {
			position: 'absolute',
			right: theme.spacing(1),
			top: theme.spacing(1),
			color: '#ffffff',
			zIndex: 1
		},
		addCardButton: {
			borderRadius: '0px'
		},
		addCardText: {
			marginRight: '10px',
			fontWeight: 'bold'
		}
	})
)
