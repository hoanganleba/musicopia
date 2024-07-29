import { Component } from 'solid-js'
import Metadata from '../types/Metadata'

const AlbumCard: Component<Metadata> = (props) => {
    return (
        <div>
            <img draggable="false" class="rounded-xl" src={props.image} />
            <h4 class="text-lg text-purple-900 font-semibold mt-2">
                {props.album}
            </h4>
            <h6 class="text-sm text-purple-800">{props.artist}</h6>
        </div>
    )
}

export default AlbumCard
