import type { FC } from "react"
import PropTypes from "prop-types"

interface YoutubeEmbedProps {
  embedId: string
  embedWidth?: number
  embedHeight?: number
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ embedId, embedWidth = 560, embedHeight = 315 }: YoutubeEmbedProps) => (
  <iframe
    width={embedWidth}
    height={embedHeight}
    src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="CSA@UVA Officer Introduction Video"
  />
)

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
}

export default YoutubeEmbed
