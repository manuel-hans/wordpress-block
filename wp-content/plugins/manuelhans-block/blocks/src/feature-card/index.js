/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';
import { withSelect } from '@wordpress/data';

// Register the block
registerBlockType( metadata.name, {
    attributes: {
        header: {
            type: "string",
            default: "Header",
        },
        detail: {
            type: "string",
            default: "Lorem ipsum dolor sit amet",
        },
        image: {
            type: 'object',
        },
    },
    edit: withSelect((select, props) => {
        return { media: props.attributes.image ? select('core').getMedia(props.attributes.image.id) : undefined };
    })(Edit),
    save: Save,
} );