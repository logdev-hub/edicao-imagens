#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Automação didática dos exercícios 5, 6 e 7 para GIMP 3.

Este plug-in foi preparado especificamente para as imagens distribuídas no
projeto "GIMP para E-commerce — 20 exemplos". Ele preserva a camada original
e deixa o resultado em camadas para inspeção e ajuste manual.
"""

import sys
import traceback

import gi

gi.require_version("Gimp", "3.0")
gi.require_version("Gegl", "0.4")

from gi.repository import Gegl, Gimp, GLib


PROC_EX5 = "plug-in-ecommerce-exercicio-05-cor"
PROC_EX6 = "plug-in-ecommerce-exercicio-06-fundo-branco"
PROC_EX7 = "plug-in-ecommerce-exercicio-07-transparencia"
MENU_PATH = "<Image>/Filters/E-commerce"


def _validate_single_layer(drawables):
    """Retorna a única camada selecionada ou informa um erro claro."""
    if len(drawables) != 1:
        raise ValueError(
            "Selecione exatamente uma camada antes de executar a automação."
        )
    if not isinstance(drawables[0], Gimp.Layer):
        raise ValueError("O item selecionado precisa ser uma camada de imagem.")
    return drawables[0]


def _duplicate_for_work(image, source, source_name, work_name):
    """Preserva a camada recebida e cria uma cópia editável no topo."""
    source.set_name(source_name)
    working = source.copy()
    image.insert_layer(working, None, 0)
    working.set_name(work_name)
    working.set_visible(True)
    source.set_visible(False)
    image.set_selected_layers([working])
    return working


def _new_rgba_layer(image, name, fill_type, position):
    """Cria uma camada RGBA do tamanho da imagem e a insere na pilha."""
    layer = Gimp.Layer.new(
        image,
        name,
        image.get_width(),
        image.get_height(),
        Gimp.ImageType.RGBA_IMAGE,
        100.0,
        Gimp.LayerMode.NORMAL,
    )
    layer.fill(fill_type)
    image.insert_layer(layer, None, position)
    return layer


def _scaled_polygon(image, points, reference_width=1254.0, reference_height=1254.0):
    """Converte pontos da imagem didática para qualquer redimensionamento."""
    scale_x = image.get_width() / reference_width
    scale_y = image.get_height() / reference_height
    coordinates = []
    for x, y in points:
        coordinates.extend([x * scale_x, y * scale_y])
    return coordinates


def _run_safely(procedure, run_mode, image, drawables, action, success_message):
    """Executa uma atividade como um único passo de desfazer."""
    undo_started = False
    try:
        source = _validate_single_layer(drawables)
        if not source.is_rgb():
            raise ValueError("A automação requer uma imagem RGB.")

        image.undo_group_start()
        undo_started = True
        action(image, source)
        image.undo_group_end()
        undo_started = False

        Gimp.displays_flush()
        if run_mode == Gimp.RunMode.INTERACTIVE:
            Gimp.message(success_message)
        return procedure.new_return_values(Gimp.PDBStatusType.SUCCESS, None)

    except Exception as error:
        if undo_started:
            image.undo_group_end()
        traceback.print_exc()
        return procedure.new_return_values(
            Gimp.PDBStatusType.EXECUTION_ERROR,
            GLib.Error(str(error)),
        )


def _exercise_05(image, source):
    """Neutraliza a dominante amarela da caneca da Atividade 5."""
    working = _duplicate_for_work(
        image,
        source,
        "Original — não editar",
        "Cor corrigida — automação",
    )

    # A foto foi produzida com dominante semelhante a luz quente de 3000 K.
    # A operação GEGL é a mesma base do comando Colors > Color Temperature.
    color_filter = Gimp.DrawableFilter.new(
        working,
        "gegl:color-temperature",
        "Neutralizar dominante amarela",
    )
    if color_filter is None:
        raise RuntimeError("O filtro GEGL de temperatura de cor não está disponível.")

    color_filter.set_blend_mode(Gimp.LayerMode.REPLACE)
    color_filter.set_opacity(1.0)
    config = color_filter.get_config()
    config.set_property("original-temperature", 3000.0)
    config.set_property("intended-temperature", 6500.0)
    color_filter.update()
    working.merge_filter(color_filter)
    working.set_opacity(100.0)
    image.set_selected_layers([working])


def run_exercise_05(procedure, run_mode, image, drawables, config, data):
    return _run_safely(
        procedure,
        run_mode,
        image,
        drawables,
        _exercise_05,
        "Exercício 5 concluído. Compare as camadas e, se necessário, reduza "
        "a opacidade de 'Cor corrigida — automação'.",
    )


def _exercise_06(image, source):
    """Recorta o tênis da Atividade 6 e cria fundo branco e sombra."""
    working = _duplicate_for_work(
        image,
        source,
        "Original — não editar",
        "Produto recortado — revisar máscara",
    )
    working.add_alpha()

    # Contorno específico da imagem atividade-06-fundo-branco.png (1254 px).
    # Os pontos são escalados se a imagem tiver sido redimensionada.
    shoe_outline = [
        (216, 352), (244, 355), (258, 382), (294, 388),
        (329, 392), (366, 408), (402, 435), (444, 450),
        (479, 421), (513, 381), (548, 368), (582, 390),
        (600, 414), (622, 426), (641, 447), (660, 458),
        (678, 480), (700, 492), (720, 510), (743, 522),
        (765, 541), (790, 551), (817, 569), (846, 582),
        (873, 599), (902, 612), (932, 627), (960, 640),
        (989, 654), (1018, 667), (1047, 680), (1076, 693),
        (1100, 708), (1119, 728), (1130, 753), (1125, 778),
        (1110, 807), (1082, 832), (1046, 849), (1002, 863),
        (955, 876), (907, 887), (859, 897), (812, 903),
        (764, 908), (718, 908), (670, 902), (620, 893),
        (570, 884), (519, 874), (468, 863), (417, 851),
        (365, 839), (316, 826), (270, 813), (228, 800),
        (190, 785), (159, 765), (142, 742), (135, 718), (134, 684),
        (146, 643), (159, 599), (171, 550), (181, 500),
        (190, 448), (193, 404), (190, 374),
    ]
    pull_tab_hole = [
        (208, 379), (218, 375), (224, 382),
        (223, 394), (215, 402), (207, 396),
    ]

    Gimp.context_push()
    try:
        Gimp.context_set_antialias(True)
        Gimp.context_set_feather(False)

        image.select_polygon(
            Gimp.ChannelOps.REPLACE,
            _scaled_polygon(image, shoe_outline),
        )
        image.select_polygon(
            Gimp.ChannelOps.SUBTRACT,
            _scaled_polygon(image, pull_tab_hole),
        )
        Gimp.Selection.feather(image, 1.0)

        mask = working.create_mask(Gimp.AddMaskType.SELECTION)
        if mask is None or not working.add_mask(mask):
            raise RuntimeError("Não foi possível criar a máscara do tênis.")
        Gimp.Selection.none(image)

        white_background = _new_rgba_layer(
            image,
            "Fundo branco #FFFFFF",
            Gimp.FillType.WHITE,
            1,
        )

        shadow = _new_rgba_layer(
            image,
            "Sombra suave — opcional",
            Gimp.FillType.TRANSPARENT,
            1,
        )
        black = Gegl.Color.new("black")
        Gimp.context_set_foreground(black)

        scale_x = image.get_width() / 1254.0
        scale_y = image.get_height() / 1254.0
        image.select_ellipse(
            Gimp.ChannelOps.REPLACE,
            150.0 * scale_x,
            752.0 * scale_y,
            950.0 * scale_x,
            174.0 * scale_y,
        )
        Gimp.Selection.feather(image, 38.0 * ((scale_x + scale_y) / 2.0))
        shadow.edit_fill(Gimp.FillType.FOREGROUND)
        shadow.set_opacity(15.0)
        Gimp.Selection.none(image)

        white_background.set_visible(True)
        shadow.set_visible(True)
        image.set_selected_layers([working])
    finally:
        Gimp.context_pop()


def run_exercise_06(procedure, run_mode, image, drawables, config, data):
    return _run_safely(
        procedure,
        run_mode,
        image,
        drawables,
        _exercise_06,
        "Exercício 6 preparado. Revise a máscara do tênis a 300% antes de "
        "exportar; a sombra pode ser ocultada para marketplaces que não a aceitam.",
    )


def _exercise_07(image, source):
    """Remove o fundo verde do novo material da Atividade 7."""
    working = _duplicate_for_work(
        image,
        source,
        "Original — não editar",
        "Produto transparente — revisar contorno",
    )
    working.add_alpha()

    # Cor média medida no arquivo atividade-07-recorte-v2.png.
    background_color = Gegl.Color.new("#5ACEBA")

    Gimp.context_push()
    try:
        Gimp.context_set_antialias(True)
        Gimp.context_set_feather(False)
        Gimp.context_set_sample_merged(False)
        Gimp.context_set_sample_threshold_int(15)
        Gimp.context_set_sample_transparent(False)

        image.select_color(
            Gimp.ChannelOps.REPLACE,
            working,
            background_color,
        )
        Gimp.Selection.grow(image, 1)
        Gimp.Selection.feather(image, 1.0)
        working.edit_clear()
        Gimp.Selection.none(image)
        image.set_selected_layers([working])
    finally:
        Gimp.context_pop()


def run_exercise_07(procedure, run_mode, image, drawables, config, data):
    return _run_safely(
        procedure,
        run_mode,
        image,
        drawables,
        _exercise_07,
        "Exercício 7 concluído. O quadriculado indica transparência; revise o "
        "contorno e exporte como PNG para preservar o canal alpha.",
    )


PROCEDURES = {
    PROC_EX5: {
        "callback": run_exercise_05,
        "label": "Exercício 5 — Corrigir dominante amarela",
        "summary": "Corrige a dominante da imagem didática da caneca.",
        "description": (
            "Duplica a camada selecionada e aplica a correção de temperatura "
            "preparada para atividade-05-cor.png."
        ),
    },
    PROC_EX6: {
        "callback": run_exercise_06,
        "label": "Exercício 6 — Criar fundo branco",
        "summary": "Recorta o tênis e cria fundo branco com sombra opcional.",
        "description": (
            "Cria máscara, fundo #FFFFFF e sombra editável para a imagem "
            "atividade-06-fundo-branco.png."
        ),
    },
    PROC_EX7: {
        "callback": run_exercise_07,
        "label": "Exercício 7 — Remover fundo verde",
        "summary": "Remove o fundo verde e cria transparência real.",
        "description": (
            "Seleciona a cor do fundo do arquivo atividade-07-recorte-v2.png, "
            "adiciona alpha e limpa o fundo."
        ),
    },
}


class EcommerceAutomation(Gimp.PlugIn):
    def do_query_procedures(self):
        return list(PROCEDURES.keys())

    def do_create_procedure(self, name):
        metadata = PROCEDURES.get(name)
        if metadata is None:
            return None

        procedure = Gimp.ImageProcedure.new(
            self,
            name,
            Gimp.PDBProcType.PLUGIN,
            metadata["callback"],
            None,
        )
        procedure.set_sensitivity_mask(Gimp.ProcedureSensitivityMask.DRAWABLE)
        procedure.set_menu_label(metadata["label"])
        procedure.add_menu_path(MENU_PATH)
        procedure.set_documentation(
            metadata["summary"],
            metadata["description"],
            None,
        )
        procedure.set_attribution(
            "Projeto GIMP para E-commerce",
            "Projeto GIMP para E-commerce",
            "2026",
        )
        return procedure


Gimp.main(EcommerceAutomation.__gtype__, sys.argv)
