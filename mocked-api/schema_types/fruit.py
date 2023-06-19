import strawberry
from strawberry import relay
from strawberry.types import Info
from typing import Iterable
from typing import Dict


@strawberry.type
class Fruit(relay.Node):
    code: relay.NodeID[int]
    name: str
    weight: float

    @classmethod
    def resolve_nodes(
        cls,
        *,
        info: Info,
        node_ids: Iterable[str],
        required: bool = False,
    ):
        return [
            all_fruits[int(nid)] if required else all_fruits.get(nid)
            for nid in node_ids
        ]


all_fruits: Dict[int, Fruit] = []
